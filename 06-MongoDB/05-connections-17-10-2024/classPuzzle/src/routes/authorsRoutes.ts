import express from 'express';
import { addAuthor } from '../controllers/authors/setAuthorsDB';
import { getBooksByAuthorId } from '../controllers/authors/getAuthors';
import { getAuthorBooksByName } from '../controllers/authors/getAuthorBooksByName';

const router = express.Router()

router.post("/add-author",addAuthor)
router.get("/get-books-by-authorId",getBooksByAuthorId)
router.get('/get-author-books-by-name', getAuthorBooksByName);

export default router