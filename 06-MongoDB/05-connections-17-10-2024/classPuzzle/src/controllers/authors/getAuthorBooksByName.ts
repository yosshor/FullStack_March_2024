import mongoose from "mongoose";
import { Author } from "../../model/authors/authorsModel";
import { Book } from "../../model/books/booksModel";

export const getAuthorBooksByName = async (req: any, res: any): Promise<void> => {
  try {
    const { name } = req.query;
    if (!name) throw new Error("Missing required fields name");
    console.log(name);
    const books = await Book.find().populate("author");
    const filteredBooks = books.filter((book:any) => book.author.name === name);
    const mapBooks = filteredBooks.map((book:any) => {
        return {
            title: book.title,
            authorName:book.author.name,
            authorGender:book.author.gender,
        }
    })
    console.log(mapBooks);
    res.send(mapBooks);

  } catch (error: any) {
    console.log(error);
    res.send("Error getting books", error.message);
  }
};
