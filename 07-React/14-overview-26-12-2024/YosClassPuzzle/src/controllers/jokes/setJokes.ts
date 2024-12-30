import { Request } from "express";
import Joke from "../../model/jokes/jokeModel";
import { Response } from "express";

export const addJoke = async (req: Request, res: Response) => {
    try {
        const { joke } = req.body;
        console.log('joke', joke, req.cookies)

        if (!joke) {
            return res.status(400).json({ message: 'Joke is required ' });
        }
        const { userId } = req.cookies;
        if (!userId) {
            console.info('Unauthorized. No userId in cookies');
            return res.status(401).json({ message: 'Unauthorized' });
        }



        const newJoke = new Joke({ joke, userId });


        const savedJoke = await newJoke.save();
        res.status(201).json({ok:true, joke: savedJoke});
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}