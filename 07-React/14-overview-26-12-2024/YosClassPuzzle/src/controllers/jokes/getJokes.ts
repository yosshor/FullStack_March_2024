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

export const getMyJokes = async (req:Request, res:Response) => {
    try {

        const { userId } = req.cookies;

        if(!userId) {
            console.info('Unauthorized. No userId in cookies');
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const jokes = await Joke.find({ userId: req.cookies.userId });
        res.json({jokes, ok:true});
    } catch (error:any) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}