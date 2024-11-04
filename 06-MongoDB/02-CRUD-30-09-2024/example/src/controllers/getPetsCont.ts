import { PetModel, pets } from '../model/petModel'


export async function getAllPets(req: any, res: any) {
    try {
        const pets = await PetModel.find();
        console.log(pets)
        res.send({ pets });

    } catch (error) {
        console.error(error);
    }
}

//get all pets under the age of X
