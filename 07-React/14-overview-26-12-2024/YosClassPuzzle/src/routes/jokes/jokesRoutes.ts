import express from 'express';
import mongoose from 'mongoose';
import { getRandomJoke } from '../../controllers/jokes/getJokes';
import { addJoke } from '../../controllers/jokes/setJokes';
import { deleteJoke } from '../../controllers/jokes/deleteJoke';
import { getAllJokes } from '../../controllers/jokes/getAllJokes';


const router = express.Router();


// GET random joke
router.get('/get-random-joke', getRandomJoke );

// POST add a new joke
router.post('/add-joke', addJoke );

// GET all jokes
router.get('/get-all-jokes', getAllJokes);

// DELETE a joke
router.delete('/delete-joke', deleteJoke );

export default router;