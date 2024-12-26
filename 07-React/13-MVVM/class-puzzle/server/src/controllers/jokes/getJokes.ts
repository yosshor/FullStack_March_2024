import { Response } from "express";
import Joke from "../../model/jokes/jokeModel";
import { Request } from "express";

export const getRandomJoke = async (req:Request, res:Response) => {
    try {
        const count = await Joke.countDocuments();
        const random = Math.floor(Math.random() * count);
        const joke = await Joke.findOne().skip(random);
        res.json(joke);
    } catch (error:any) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}