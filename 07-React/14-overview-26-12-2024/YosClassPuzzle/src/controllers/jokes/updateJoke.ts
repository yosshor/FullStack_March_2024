import Joke from "../../model/jokes/jokeModel";


export async function updateJoke(req: any, res: any) {
    const { joke, id } = req.body;
    console.log(joke, id);
    if (!joke || !id) {
        return res.status(400).json({ message: 'Missing joke or id' });
    }
    try {
        const updatedJoke = await Joke.findByIdAndUpdate
            (id, { joke }, { new: true });
        if (!updatedJoke) {
            return res.status(404).json({ message: 'Joke not found' });
        }
        return res.status(200).json(updatedJoke);
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }

}
