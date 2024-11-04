import mongoose from "mongoose";




 export const PetSchema = new mongoose.Schema({
    id: String,
    name: String,
    species: { type: mongoose.Schema.Types.ObjectId, ref: 'Species', required: true },
    age: Number,
    price: Number,
    imageURL: String,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
    status: { type: String, enum: ['cart', 'sold'], default: 'cart' }
  });
  
  export const PetModel = mongoose.model('Pet', PetSchema);