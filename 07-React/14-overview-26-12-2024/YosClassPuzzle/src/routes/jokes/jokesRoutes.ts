import express from 'express';
import mongoose from 'mongoose';
import { getRandomJoke } from '../../controllers/jokes/getJokes';
import { addJoke } from '../../controllers/jokes/setJokes';
import { deleteJoke } from '../../controllers/jokes/deleteJoke';

const router = express.Router();


// GET random joke
router.get('/get-random-joke', getRandomJoke );

// POST add a new joke
router.post('/add-joke', addJoke );

// DELETE a joke
router.delete('/delete-joke', deleteJoke );

export default router;