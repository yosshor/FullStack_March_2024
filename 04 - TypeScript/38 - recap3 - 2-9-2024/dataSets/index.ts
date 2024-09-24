//model

//pets
class Pet {
    petName: string;
    petImage: string;
    id: string;


    constructor(petName: string, petImage: string) {
        this.petName = petName;
        this.petImage = petImage;
        this.id = crypto.randomUUID();

    }
}


const mitzi = new Pet('Mitzi', 'https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg');
const luna = new Pet('Luna', 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png');
const spark = new Pet('Spark', 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

const pets = [mitzi, luna, spark];

//users
class User {
    id: string;
    userName: string;
    profileImage: string;


    constructor(userName: string, profileImage: string) {
        this.userName = userName;
        this.profileImage = profileImage;
        this.id = crypto.randomUUID();
    }



    //the user can chan the pet name
}
const users: User[] = [
    new User('John', 'https://belonging.berkeley.edu/sites/default/files/styles/profile_focal_point/public/johnpowell_headshot_0.jpg'),
    new User('Jane', 'https://janeofficial.com/wp-content/uploads/2022/06/2.jpg'),
];

class PetsOwners {
    ownerId: string;
    petId: string;

    constructor(ownerId: string, petId: string) {
        this.ownerId = ownerId;
        this.petId = petId;
    }
}

const petsOwners: PetsOwners[] = [];

//controllers for petsOwners
function setOwnerForPet(newOwnerId: string, petId: string) {
    try {

        //find if the pet is already owned by someone
        const previousOwner = petsOwners.find(petOwner => petOwner.petId === petId);

        //if the pet is already owned, update the owner
        if (previousOwner) {
            previousOwner.ownerId = newOwnerId;
        } else {
            //if the pet is not owned, add a new owner
            petsOwners.push(new PetsOwners(newOwnerId, petId));
        }
    } catch (error) {
        console.error(error);

    }
}

//get owner list of pets
function getOwnerListOfPets(ownerId: string): Pet[] {
    //get all pets of owner
    const OwnerPetsIds = petsOwners.filter(petOwner => petOwner.ownerId === ownerId);

    //convert to pet objects
    const ownerPets = OwnerPetsIds.map(petOwner => pets.find(pet => pet.id === petOwner.petId)).filter(pet => pet !== undefined) as Pet[];
    return ownerPets;

}

//get owner of pet
function getOwnerOfPet(petId: string): User | null {
    try {

        const petOwnerId = petsOwners.find(petOwner => petOwner.petId === petId);
        if (!petOwnerId) {
            return null;
        } else {
            const user = users.find(user => user.id === petOwnerId.ownerId);
            if (!user) {
                return null;
            }
            return user;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}


//view

function renderPet(pet: Pet): string {
    const owner = getOwnerOfPet(pet.id);
    const ownerName = owner ? owner.userName : 'No owner';
    return `
    <div class="pet-card">
        <h2>${pet.petName} (${ownerName})</h2>
        <button onclick="handleDeletePet('${pet.id}')">Delete</button>
        <img src="${pet.petImage}" alt="${pet.petName}">
        ${renderUserSelect(users, pet)}
    </div>
    `;
}

function renderUserSelect(users: User[], pet: Pet): string {
    return `
    <select onchange="handleSetCatToUser(event, '${pet.id}')">
        <option value="" disabled selected>Select owner</option>
        ${users.map(user => `<option value="${user.id}">${user.userName}</option>`).join('')}
    </select>
    `;
}

function renderPets(pets: Pet[]): void {
    try {
        const html = `
    <div class="pets-list">
        ${pets.map(pet => renderPet(pet)).join('')}
    </div>
    `;

        const petsContainer = document.querySelector('#root-cats');
        if (!petsContainer) {
            throw new Error('There is no pets container');
        }
        petsContainer.innerHTML = html;



    } catch (error) {
        console.error(error);
    }
}

function renderUser(user: User): string {
    return `
    <div class="user-card">
        <h2>${user.userName}</h2>
        <button onclick="handleDeleteUser('${user.id}')">Delete</button>
        <img src="${user.profileImage}" alt="${user.userName}">
        cats: ${getOwnerListOfPets(user.id).map(pet => pet.petName).join(', ')}
    </div>
    `;
}

function renderUsers(users: User[]): void {
    try {
        const html = `
    <div class="users-list">
        ${users.map(user => renderUser(user)).join('')}
    </div>
    `;

        const usersRoot = document.querySelector('#root-users');
        if (!usersRoot) {
            throw new Error('There is no users container');
        }
        usersRoot.innerHTML = html;



    } catch (error) {
        console.error(error);
    }
}

//controllers
function main() {
    try {
        const addPetForm = document.querySelector('#add-pet');
        if (!addPetForm) {
            throw new Error('There is no add pet form');
        }
        addPetForm.addEventListener('submit', addPet);
        renderPets(pets);
        renderUsers(users);
    } catch (error) {
        console.error(error);
    }
}

main();

function handleDeletePet(id: string) {
    deleteFromOwner(id);
    const petIndex = pets.findIndex(pet => pet.id === id);
    if (petIndex === -1) {
        return;
    }
    pets.splice(petIndex, 1);
    renderPets(pets);

}

function deleteFromOwner(id: string) {
    const ownerindex = petsOwners.findIndex(pet => pet.petId === id);
    if (ownerindex === -1) {
        return;
    }
    petsOwners.splice(ownerindex, 1);
    renderUsers(users);
}

function handleDeleteUser(id: string) {
    deleteFromPet(id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return;
    }
    users.splice(userIndex, 1);
    renderUsers(users);

}

function deleteFromPet(id: string) {
    const petindex = petsOwners.findIndex(user => user.ownerId === id);
    if (petindex === -1) {
        return;
    }
    petsOwners.splice(petindex, 1);
    renderPets(pets);
}

function addPet(event) {
    try {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const petName = form.petName.value;
        const petImage = form.imageUrl.value;
        const newPet = new Pet(petName, petImage);
        pets.unshift(newPet);
        renderPets(pets);
    } catch (error) {
        console.error(error);

    }
}

function addUser(event) {
    try {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const userName = form.userName.value;
        const profileImage = form.profileImage.value;
        const newUser = new User(userName, profileImage);
        users.unshift(newUser);
        renderUsers(users);
    } catch (error) {
        console.error(error);

    }
}

function handleSetCatToUser(ev, petId: string) {
    try {
        console.log(ev.target.value);
        console.log('petId', petId);

        const user = users.find(user => user.id === ev.target.value);
        if (!user) {
            throw new Error('User not found');
        }
        const pet = pets.find(pet => pet.id === petId);
        if (!pet) {
            throw new Error('Pet not found');
        }


        setOwnerForPet(user.id, pet.id);
        console.log(petsOwners);

        renderUsers(users);
        renderPets(pets);
    } catch (error) {
        console.error(error);
    }
}