import {  PetModel } from "../../model/petModel";
export async function addPet(req: any, res: any) {
    try {

        const { name, species, age, price, imageURL } = req.body;
        if (!name || !species || !age || !price) {
            return res.status(400).send({ error: "missing data" })
        }
        const newPet = new PetModel({ name, species, age, price, imageURL });
        await newPet.save()

        const pets = await PetModel.find();
        res.send({ pets });
    } catch (error: any) {
        console.error(error);

    }
}