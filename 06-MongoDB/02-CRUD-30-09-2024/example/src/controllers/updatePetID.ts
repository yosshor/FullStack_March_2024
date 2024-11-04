import { PetModel } from '../model/petModel'


export async function updatePetID(req: any, res: any) {
  try {

    const { petId } = req.params;
    console.log(req.params);
    const { price, age,species,name } = req.body;
    console.log(petId);
   

    if (!petId) throw new Error("bad pet ID");
    if (!age) throw new Error("bad update info")


    // const petsIndex = pets.findIndex(pet => pet.id === petId);
    // if (petsIndex === -1) throw new Error("PET not found");

    // if (age) pets[petsIndex].setAge(age);
    // if (price) pets[petsIndex].setPrice(price);
    // if (species) pets[petsIndex].setSpecies(species);
    // if(name) pets[petsIndex].setName(name);

    const updatedPet = await PetModel.findByIdAndUpdate(petId, {  age }, { new: true });
    const pets = await PetModel.find();


    res.send({ ok: 'all good', pets, updatedPet });
  } catch (error: any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}