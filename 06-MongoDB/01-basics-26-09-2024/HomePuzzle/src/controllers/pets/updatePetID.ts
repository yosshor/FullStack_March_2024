import { fetchAllPets, Pet, PetModel } from "../../model/pets/petModel";

export async function updatePetID(req: any, res: any) {
  try {
    const pets: Pet[] = await fetchAllPets();

    // const { petID } = req.params;
    const { price, age, species, name, imageURL, id } = req.body;
    // console.log(petID);
    console.log(price, age, species, name, imageURL, id);

    if (!price) throw new Error("bad update info");

    const pet = await PetModel.findOneAndUpdate(
      { _id: id },
      {
        price: price,
        name: name,
        species: species,
        imageURL: imageURL,
        age: age,
      }
    ).exec();


    res.send({ ok: "all good", pets });
  } catch (error: any) {
    console.error(error);
    res.send({ ok: false, error: error.message });
  }
}
