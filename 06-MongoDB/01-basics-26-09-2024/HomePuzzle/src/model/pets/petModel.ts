import mongoose from "mongoose";
import { saveSpecies } from "../species/speciesModel";


export class Pet {
  id: string;
  name: string;
  species: string;
  age: number;
  price: number;
  imageURL?: string;

  constructor(
    id: string,
    name: string,
    species: string,
    age: number,
    price: number,
    imageUrl?: string,
  ) {
    this.id = id ?? crypto.randomUUID();
    this.name = name;
    this.species = species;
    this.age = new Date().getFullYear() - age;
    this.price = price;
    this.imageURL = imageUrl ?? "";
  }
  setAge(age: number) {
    this.age = age;
  }
  setPrice(price: number) {
    this.price = price;
  }
  setSpecies(species: string) {
    this.species = species;
  }
  setName(name: string) {
    this.name = name;
  }
  setImage(image: string) {
    this.imageURL = image;
  }
}

export const pets: Pet[] = [
  new Pet(
    crypto.randomUUID().toString(),
    "rocky",
    "Dog",
    13,
    50,
    "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_640.jpg"
  ),
  new Pet(
    crypto.randomUUID().toString(),
    "kitty",
    "Cat",
    5,
    30,
    "https://t4.ftcdn.net/jpg/02/26/53/33/360_F_226533348_TiIz0m2dU4dBXC6yFJrNOfXfh5YcEecY.jpg"
  ),
  new Pet(
    crypto.randomUUID().toString(),
    "bunny",
    "Rabbit",
    2,
    20,
    "https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg"
  ),
  new Pet(
    crypto.randomUUID().toString(),
    "fluffy",
    "Dog",
    4,
    40,
    "https://img.freepik.com/premium-photo/dog-cat-are-laying-rug-with-dog-pet-care-hd-quality-image-website_1286196-1697.jpg"
  ),
  new Pet(
    crypto.randomUUID().toString(),
    "bella",
    "Cat",
    3,
    30,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2q03WBtyTfE9IuUPg0rCFsnN7fs2xCpyeuEDewbrruhTjnaRCFJidkaWhIb4AyS1d60&usqp=CAU"
  ),
];

export const PetSchema = new mongoose.Schema({
  id: String,
  name: String,
  species: { type: mongoose.Schema.Types.ObjectId, ref: 'Species', required: true },
  age: Number,
  price: Number,
  imageURL: String,
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['cart', 'sold'], default: 'cart' }

});

export const PetModel = mongoose.model("Pet", PetSchema);

const species = saveSpecies();

// insert data pet into mongodb
pets.forEach((pet) => {
  console.log(pet.name);
  PetModel.findOne({ name: pet.name })
    .then(async (data: any) => {
      if (data) {
        console.log("Data already exists");
        return;
      } else {
        const { name, species, age, price, imageURL } = pet;
        if (!name || !species || !age || !price) {
          return console.log("missing data");
        }
        const newPet = new PetModel({ name, species, age, price, imageURL });
        await newPet.save();
        console.log("Data inserted");
      }
    })
    .catch((err: any) => {
      console.log(err);
    });
});

// Fetch all pets from MongoDB
export const fetchAllPets = async (): Promise<Pet[]> => {
  try {
    const allPetsFromMongo = await PetModel.find().exec();

    // Convert allPetsFromMongo to Pet[]
    const pets: Pet[] = allPetsFromMongo.map(
      (pet: any) =>
        new Pet(pet._id.toString(), pet.name, pet.species, pet.age, pet.price, pet.imageURL)
    );
    return pets;
  } catch (err) {
    console.error("Error fetching pets:", err);
    return [];
  }
};

