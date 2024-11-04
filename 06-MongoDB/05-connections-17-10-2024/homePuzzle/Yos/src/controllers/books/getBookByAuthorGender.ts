import { Book } from "../../model/books/booksModel";

export async function getBookByAuthorGender(req: any, res: any): Promise<void> {
  try {
    const { gender } = req.query;
    if (!gender) throw new Error("Missing required fields gender");
    console.log(gender);

    const books = await Book.find()
      .populate("author")
    const filteredBooks = books.filter((book:any) => book.author.gender === gender);
    const newBooks = filteredBooks.map((book:any) => {
        return {
            title: book.title,
            authorName:book.author.name,
            authorGender:book.author.gender,
        }
    })
    console.log(newBooks);
    res.send(newBooks);
  } catch (error: any) {
    console.log(error);
    res.send("Error getting books", error.message);
  }
}
