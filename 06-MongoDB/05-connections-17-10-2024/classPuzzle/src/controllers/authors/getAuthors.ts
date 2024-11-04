import mongoose from "mongoose";
import { Book } from "../../model/books/booksModel";

export async function getBooksByAuthorId(req: any, res: any) {
    try {
        const { authorId } = req.query
        if (!authorId) throw new Error("Missing required fields")

        if (!mongoose.Types.ObjectId.isValid(authorId)) {
            return res.status(400).json({ error: "Invalid author ID" });
        }
        console.log(authorId)
        const books = await Book.find({author:authorId}).populate('author')
        console.log(books)
        res.send(books)
    } catch (error: any) {
        console.log(error)
        res.send('Error getting books', error.message)
    }
}