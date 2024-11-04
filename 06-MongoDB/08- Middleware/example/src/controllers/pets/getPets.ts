import { Pet } from "../../model/pets/petModel";

export async function getPets(req: any, res: any) {
  try {
    const pets = await Pet.find();
    res.send({pets});
  } catch (error) {
    res.status(500).send({error});
  }
}