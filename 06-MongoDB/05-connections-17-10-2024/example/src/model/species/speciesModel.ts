import mongoose from "mongoose";

export const speciesSchema = new mongoose.Schema({
    name: { type: String, required: true , unique: true},
});

export const SpeciesModel = mongoose.model('Species', speciesSchema);
   