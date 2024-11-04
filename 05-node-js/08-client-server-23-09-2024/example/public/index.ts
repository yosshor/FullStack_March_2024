// model
class Pet {
    id: string;
    name: string;
    species: string;
    age: number;
    price: number;
    imageURL?: string;

    constructor(id: string, name: string, species: string, age: number, price: number) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.age = new Date().getFullYear() - age;
        this.price = price;
    }
}

//view
function renderPet(pet: Pet) {
    const html = `
    <img src="${pet.imageURL}" alt="${pet.name}">
    <h2>${pet.name}</h2>
    <p>${pet.species}</p>
    <p>${pet.age}</p>
    <p>${pet.price}</p>
    <button onclick="handleDeletePet('${pet.id}')">Delete</button>
    `;
    return html;
}

function renderPets(pets: Pet[], domElement: HTMLElement|null) {
    try {
        const html = pets.map(pet => renderPet(pet)).join('');
        if (!domElement) throw new Error('No element found');
        domElement.innerHTML = html

    } catch (error) {
        console.error(error);

    }

}

async function main(){
    try {
        const response = await fetch('http://localhost:3000/pets/get-all-pets');
        if(!response.ok) throw new Error('Cannot fetch pets');
        const {pets} = await response.json();
        if(!pets) throw new Error('Cannot fetch pets deconstructed');
        const _pets:Pet[] = pets.map((pet: any) => new Pet(pet.id, pet.name, pet.species, pet.age, pet.price));
        renderPets(pets, document.querySelector('#pets'));


    } catch (error) {
        console.error(error);
        
    }
}

async function handelAddPetToDB(e:any){
    e.preventDefault();
    try {
       const form = e.target;
         const pet = {
              name: form.name.value,
              species: form.species.value,
              age: form.age.valueAsNumber,
              price: form.price.valueAsNumber,
              imageURL: form.imageURL.value
         }
        
            const response = await fetch('http://localhost:3000/pets/add-pet',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pet)
            });

            if(!response.ok) throw new Error('Cannot add pet');
            const {pets, error} = await response.json();
            console.log(error);
            if(!pets) throw new Error('Cannot add pet deconstructed');
            console.log(pets)
            renderPets(pets, document.querySelector('#pets'));

    } catch (error) {
        console.error(error);
    }
}

async function handleDeletePet(id:string){
    try {
        if(!id) throw new Error('No id');
        const response = await fetch(`http://localhost:3000/pets/delete-pet-id`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({petId:id})
        });
        if(!response.ok) throw new Error('Cannot delete pet');  
        const {pets, error} = await response.json();
        if(!pets) throw new Error('Cannot delete pet deconstructed');
        renderPets(pets, document.querySelector('#pets'));
    } catch (error) {
        console.error(error);
    }
}