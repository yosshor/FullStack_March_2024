import mongoose from "mongoose";

export const authorSchema = new mongoose.Schema({
    name: String,
    gender: String
  });

export const Author = mongoose.model('Author', authorSchema);


