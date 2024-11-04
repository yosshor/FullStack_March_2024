import { fetchAllPets, Pet, PetModel } from "../../model/pets/petModel";

export async function deletePetID(req: any, res: any) {
  try {
    const { petID } = req.params;
    console.log(petID);
    const pet = await PetModel.findOneAndDelete({ _id: petID }).exec();
    console.log(pet);
    if (!pet) throw new Error("Pet not found");
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.send({ ok: false, error: error.message });
  }
}
