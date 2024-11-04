import mongoose from "mongoose";
import { Book } from "../../model/books/booksModel";
import { Author } from "../../model/authors/authorsModel";

export async function getBooksByAuthorId(req: any, res: any) {
    try {
        const { authorId } = req.query
        if (!authorId) throw new Error("Missing required fields")

        if (!mongoose.Types.ObjectId.isValid(authorId)) {
            return res.status(400).json({ error: "Invalid author ID" });
        }
        console.log(authorId)
        const books = await Book.find({ author: authorId }).populate('author')
        console.log(books)
        res.send(books)
    } catch (error: any) {
        console.log(error)
        res.send('Error getting books', error.message)
    }
}

export async function getBooksByGender(req: any, res: any) {
    try {
        const { gender } = req.query
        if (!gender || (gender !== "male" && gender !== 'female')) throw new Error("Missing gender or incorrect gender");

        const authorsByGender = await Author.find({ gender });
      
        // const books:any = [];
        // authorsByGender.forEach(async author => {
        //     const booksByAuthor = await Book.find({ author: author._id }).populate('author');
        //     books.push(...booksByAuthor);
        //     console.log(books)
        // });

        const femaleAuthorsIds = authorsByGender.map(author => author._id);
        const books = await Book.find({ author: { $in: femaleAuthorsIds } }).populate('author');
        res.send(books)
    } catch (error: any) {
        console.log(error)
        res.send('Error getting books', error.message)
    }
}
