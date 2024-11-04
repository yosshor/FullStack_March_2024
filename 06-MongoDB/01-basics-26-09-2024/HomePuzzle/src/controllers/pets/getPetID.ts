import {fetchAllPets, Pet, PetModel }from '../../model/pets/petModel'


export async function getPetID(req:any,res:any){
    try {
    
        const {petID} = req.params;
        console.log(petID);
        if (!petID) throw new Error("bad pet ID");
      
        // find pet by id
        const pet = await PetModel.findById(petID).exec();
        console.log(pet);
        if (pet) {
          res.send(pet);
        } else {
          res.status(404).send({ ok: false, error: "Pet not found" });
        }
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}