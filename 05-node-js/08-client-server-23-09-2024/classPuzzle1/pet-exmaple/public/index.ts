// model
class Pet {
  id: string;
  name: string;
  species: string;
  age: number;
  price: number;
  imageURL?: string;

  constructor(
    id: string,
    name: string,
    species: string,
    age: number,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.age = new Date().getFullYear() - age;
    this.price = price;
  }
}

async function getAllPet(): Promise<Pet[]> {
  try {
    const url = "/api/pets/get-all-pets";
    const req = await fetch(url);
    const pets = await req.json();
    console.log(pets.pets);
    return pets.pets;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function main() {
  const pets = await getAllPet();
  if (pets.length === 0) {
    console.error("No pets found");
    return;
  }
  const petsDiv = document.getElementById("pets") as HTMLElement;
  renderPets(pets, petsDiv);
}

//view
function renderPet(pet: Pet) {
  const html = `
    <div class="pet">
    <img src="${pet.imageURL}" alt="${pet.name}">
    <h2>${pet.name}</h2>
    <p>${pet.species}</p>
    <p>${pet.age}</p>
    <p>${pet.price}</p>
    <div class="buttons">
        <button class="btn btn-danger" onclick="handleDeletePet(event)"" id="delete-${pet.id}">Delete</button>  
        <button class="btn btn-warning" onclick="handleEditPet(event)" id="edit-${pet.id}">Edit</button>  
     </div>
    </div>`;
  return html;
}

async function handleEditPet(event: any) {
  try {
    event.preventDefault();
    const form = event.target;
    const id = form.id.split("edit-")[1];
    await renderPetForm(id);
  } catch (error) {
    console.error(error);
  }
}

const handleAddNewPet = async (event: any) => {
  event.preventDefault();
  try {
    const petForm = document.getElementById("pets") as HTMLElement;
    const html = await renderPetDiv();
    petForm.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};

const renderPetDiv = async (id?: string): Promise<string> => {
  let pet: Pet | null = null;
  if (id) {
    pet = await getPetById(id);
  }

  const html = ` <div class="update-pet">
      <form id="edit-form-${id ?? ""}" onsubmit=${
    pet ? "handleUpdatePet(event)" : "handleAddPet(event)"
  }>
        <div class="row">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" value=${pet?.name ?? ""}>
        </div>
        <div class="row">
        <label for="species">Species</label>
        <input type="text" id="species" name="species" value=${
          pet?.species ?? ""
        }>
        </div>
        <div class="row">
        <label for="age">Age</label>
        <input type="number" id="age" name="age" value=${pet?.age ?? ""}>
        </div>
        <div class="row">
        <label for="price">Price</label>
        <input type="number" id="price" name="price" value=${pet?.price ?? ""}>
        </div>
        <div class="row">
        <label for="imageURL">Image URL</label>
        <input type="text" id="imageURL" name="imageURL" value=${
          pet?.imageURL ?? ""
        }>
        </div>
        <div>
          <button type="submit">${pet ? "Update" : "Add"}</button>
        </div>
      </form>
    </div>`;
  return html;
};

async function handleAddPet(event: any) {
  try {
    event.preventDefault();
    const form = event.target;
    const pet = {
      name: form.name.value,
      species: form.species.value,
      age: form.age.value,
      price: form.price.value,
      imageURL: form.imageURL.value,
    };
    console.log("add", pet);
    await addPet(pet);
  } catch (error) {
    console.error(error);
  }
}

async function addPet(pet: any) {
  try {
    const url = "/api/pets/add-pet";
    const req = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet),
    });
    const data = await req.json();
    if (data.ok) {
      console.log("Pet added");
      main();
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}

async function renderPetForm(id: string) {
  try {
    const petForm = document.getElementById("pets") as HTMLElement;
    const html = await renderPetDiv(id);
    petForm.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
async function handleUpdatePet(event: any) {
  try {
    event.preventDefault();
    const form = event.target;
    const id = form.id.split("edit-form-")[1];
    const pet = {
      name: form.name.value,
      species: form.species.value,
      age: form.age.value,
      price: form.price.value,
      imageURL: form.imageURL.value,
    };
    console.log("update", id, pet);
    await updatePet(id, pet);
  } catch (error) {
    console.error(error);
  }
}

async function updatePet(id: string, pet: any) {
  try {
    const url = `/api/pets/update-pet-id/${id}`;
    const req = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });
    const data = await req.json();

    if (data.ok) {
      console.log("Pet updated");
      main();
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}

async function getPetById(id: string): Promise<Pet | null> {
  try {
    const url = `/api/pets/get-pet-id/${id}`;
    const req = await fetch(url);
    const pet = await req.json();
    return pet;
  } catch (error) {
    console.error(error);
    return null;
  }
}
function handleDeletePet(event: any) {
  try {
    event.preventDefault();
    const form = event.target;
    const id = form.id.split("delete-")[1];
    console.log("delete", id);
    deletePet(id);
  } catch (error) {
    console.error(error);
  }
}

async function deletePet(id: string) {
  try {
    const url = `/api/pets/delete-pet-id/${id}`;
    const req = await fetch(url, { method: "DELETE" });
    const data = await req.json();
    if (data.ok) {
      console.log("Pet deleted");
      main();
    } else {
      console.error(data.error);
    }
  } catch (error) {
    console.error(error);
  }
}

function renderPets(pets: Pet[], domElement: HTMLElement) {
  try {
    const html = pets.map((pet) => renderPet(pet)).join("");
    if (!domElement) throw new Error("No element found");
    domElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
