import {PetModel }from '../model/petModel'


export async function deletePetID(req:any,res:any){
    try {
    
        const {petId} = req.body;
     console.log(req.body)
    
        if (!petId) throw new Error("bad pet ID");
    
        // const petsIndex = pets.findIndex(pet => pet.id === petId);
        // if (petsIndex === -1) throw new Error("pet not found");
    
        // pets.splice(petsIndex, 1);
        const deletedPet = await PetModel.findByIdAndDelete(petId);
        const pets = await PetModel.find();
        console.log(deletedPet)
    
        res.send({ ok: true, pets })
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}