import { Book } from "../../model/books/booksModel"

export async function getBooksByName(req:any, res:any) {
    try {
        const { title } = req.query
        if(!title) throw new Error("Missing required fields")
            console.log(title)
        
       const books = await Book.find({title}).populate('author')
       console.log(books)
       res.send(books)

    } catch (error: any) {
        console.log(error)
        res.send('Error getting books', error.message)
    }
}