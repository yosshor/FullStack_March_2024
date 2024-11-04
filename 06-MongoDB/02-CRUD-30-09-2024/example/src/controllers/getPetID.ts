import {pets }from '../model/petModel'


export function getPetID(req:any,res:any){
    try {
    
        const {petID} = req.params;
        
    
        if (!petID) throw new Error("bad pet ID");
    
        const petsIndex = pets.findIndex(pet => pet.id === petID);
        if (petsIndex === -1) throw new Error("PET not found");
    
        
    
        res.send(pets[petsIndex] )
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}