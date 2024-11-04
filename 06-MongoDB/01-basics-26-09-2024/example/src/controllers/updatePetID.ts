import { pets } from '../../src/model/petModel'


export function updatePetID(req: any, res: any) {
  try {

    const { petID } = req.params;
    const { price, age,species,name } = req.body;
    console.log(petID);
    console.log(price);

    if (!petID) throw new Error("bad pet ID");
    if (!price) throw new Error("bad update info")


    const petsIndex = pets.findIndex(pet => pet.id === petID);
    if (petsIndex === -1) throw new Error("PET not found");

    if (age) pets[petsIndex].setAge(age);
    if (price) pets[petsIndex].setPrice(price);
    if (species) pets[petsIndex].setSpecies(species);
    if(name) pets[petsIndex].setName(name);



    res.send({ ok: 'all good', pets })
  } catch (error: any) {
    console.error(error)
    res.send({ ok: false, error: error.message })
  }
}