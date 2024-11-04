import express from 'express';
import { getBooksByName } from '../controllers/books/getBooksDB';
import { addBook } from '../controllers/books/setBooks';
import { getBookByAuthorGender } from '../controllers/books/getBookByAuthorGender';

const router = express.Router()

router.get('/get-book-by-name', getBooksByName)
router.get('/get-book-by-author-gender', getBookByAuthorGender)
router.post('/add-book', addBook)

export default router