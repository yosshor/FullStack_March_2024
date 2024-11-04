import { PetModel, fetchAllPets, Pet }from '../../model/pets/petModel'


export async function getAllPets(req:any,res:any){
    try {
        // const pets = await PetModel.find();
        const pets: Pet[] = await fetchAllPets();
        res.send({pets:pets});
    } catch (error) {
        console.error(error);
    }
}