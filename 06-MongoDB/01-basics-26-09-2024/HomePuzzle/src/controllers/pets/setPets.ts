import { PetModel } from "../../model/pets/petModel";

export async function addPet(req: any, res: any) {
  try {
    const { name, species, age, price, imageURL } = req.body;
    if (!name || !species || !age || !price) {
      return res.status(400).send({ error: "missing data" });
    }
    const newPet = new PetModel({ name, species, age, price, imageURL });
    await newPet.save();

    res.send({ newPet, ok: true });

  } catch (error: any) {
    console.error(error);
  }
}
