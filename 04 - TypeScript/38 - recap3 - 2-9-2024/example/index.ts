//model
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

//view

function renderPet(pet: Pet): string {
    return `
    <div class="pet-card">
        <h2>${pet.petName}</h2>
        <button onclick="handleDeletePet('${pet.id}')">Delete</button>
        <img src="${pet.petImage}" alt="${pet.petName}">
    </div>
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

//controllers
function main() {
    try {
        const addPetForm = document.querySelector('#add-pet');
        if (!addPetForm) {
            throw new Error('There is no add pet form');
        }
        addPetForm.addEventListener('submit', addPet);
        renderPets(pets);
    } catch (error) {
        console.error(error);
    }
}

main();

function handleDeletePet(id: string) {
    const petIndex = pets.findIndex(pet => pet.id === id);
    if (petIndex === -1) {
        return;
    }
    pets.splice(petIndex, 1);
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