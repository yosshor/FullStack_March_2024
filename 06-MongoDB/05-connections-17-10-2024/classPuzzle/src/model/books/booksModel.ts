import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
  });

//   export const bookSchema = new mongoose.Schema({
//     title: String,
//     author: {
//         name: String,
//         gender: String,
//         yearOfBirth: Number

//     }
//   });


export const Book = mongoose.model('Book', bookSchema);