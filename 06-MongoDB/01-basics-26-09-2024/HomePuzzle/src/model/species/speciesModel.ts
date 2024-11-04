import mongoose from "mongoose";

export const speciesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

export const SpeciesModel = mongoose.model("Species", speciesSchema);

// insert data species into mongodb
const species = [
  "Dog",
  "Cat",
  "Fish",
  "Bird",
  "Rabbit",
  "Hamster",
  "Guinea Pig",
  "Turtle",
  "Horse",
  "Pig",
  "Goat",
  "Chicken",
  "Duck",
  "Sheep",
  "Cow",
  "Donkey",
  "Llama",
  "Alpaca",
  "Turkey",
  "Goose",
  "Rabbit",
  "Cat",
  "Dog",
];


//insert data species into mongodb
export const saveSpecies = () => {
    species.forEach((name) => {
        const speciesDoc =  SpeciesModel.findOne({ name: name }).exec();
        if (!speciesDoc) {
            const newSpecies = new SpeciesModel({ name });
            newSpecies.save();
        }})};




