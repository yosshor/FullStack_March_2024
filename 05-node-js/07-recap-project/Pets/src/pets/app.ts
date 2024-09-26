async function main() {
    console.log('main');
    const pets = await handleGetAllPets();
    console.log(pets);
}


async function handleGetAllPets() {
 try {
    const req = await fetch('./api/pet/all-pets');
    const pets = await req.json();
    if(pets.error) throw new Error(pets.error);
    return pets
 } catch (error) {
     console.log(error);
    
 }
}