import express from 'express';
import { getBooksByName } from '../controllers/books/getBooksDB';
import { addBook } from '../controllers/books/setBooks';
import { getBooksByGender } from '../controllers/authors/getAuthors';
const router = express.Router()

router.get('/get-book-by-name', getBooksByName)
.get('/get-books-by-author-gender', getBooksByGender)
router.post('/add-book', addBook)

export default router