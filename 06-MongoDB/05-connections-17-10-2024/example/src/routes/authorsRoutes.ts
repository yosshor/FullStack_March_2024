import express from 'express';
import { addAuthor } from '../controllers/authors/setAuthoresDB';
import { getBooksByAuthorId } from '../controllers/authors/getAuthors';
const router = express.Router()

router.post("/add-author",addAuthor)
router.get("/get-books-by-authorId",getBooksByAuthorId)

export default router