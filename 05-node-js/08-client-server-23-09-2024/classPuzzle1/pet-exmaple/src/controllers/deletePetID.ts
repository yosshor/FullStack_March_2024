import {pets }from '../model/petModel'


export function deletePetID(req:any,res:any){
    try {
    
        const {petID} = req.params;
        console.log(petID)
    
        if (!petID) throw new Error("bad task ID");
    
        const petsIndex = pets.findIndex(pet => pet.id === petID);
        if (petsIndex === -1) throw new Error("Task not found");
    
        pets.splice(petsIndex, 1);
    
        res.send({ ok: true })
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}