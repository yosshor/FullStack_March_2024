import {pets }from '../../src/model/petModel'


export function deletePetID(req:any,res:any){
    try {
    
        const {petId} = req.body;
     console.log(req.body)
    
        if (!petId) throw new Error("bad pet ID");
    
        const petsIndex = pets.findIndex(pet => pet.id === petId);
        if (petsIndex === -1) throw new Error("pet not found");
    
        pets.splice(petsIndex, 1);
    
        res.send({ ok: true, pets })
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}