import mongoose from "mongoose";
import { Book } from "../../model/books/booksModel"

export async function addBook(req: any, res: any) {
    try {
        const { title, authorId } = req.body
        if (!title || !authorId) throw new Error("Missing required fields")

        if (!mongoose.Types.ObjectId.isValid(authorId)) {
            return res.status(400).json({ error: "Invalid author ID" });
        }

        const book = new Book({ title, author: authorId })
        await book.save()
        res.status(201).json(book)
    } catch (error: any) {
        console.log(error)
        res.status(500).send('Error adding book', error.message)
    }

}