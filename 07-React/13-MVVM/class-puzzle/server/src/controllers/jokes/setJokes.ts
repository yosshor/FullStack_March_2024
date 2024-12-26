import { Request } from "express";
import Joke from "../../model/jokes/jokeModel";
import { Response } from "express";

export const addJoke = async (req:Request, res:Response) => {
    const { joke } = req.body;
    console.log(req.body)

    if (!joke) {
        return res.status(400).json({ message: 'Joke is required ' });
    }

    const newJoke = new Joke({ joke });

    try {
        const savedJoke = await newJoke.save();
        res.status(201).json(savedJoke);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
}