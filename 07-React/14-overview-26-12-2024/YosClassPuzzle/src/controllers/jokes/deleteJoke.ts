import Joke from "../../model/jokes/jokeModel";

export const deleteJoke = async (req: any, res: any) => {
    const { _id } = req.body;
    if (!_id) {
        return res.status(400).json({ message: 'Joke id is required ' });
    }

    try {
        const deletedJoke = await Joke.findByIdAndDelete(_id);
        res.status(200).json({message:`${deletedJoke} deleted successfully`});
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}