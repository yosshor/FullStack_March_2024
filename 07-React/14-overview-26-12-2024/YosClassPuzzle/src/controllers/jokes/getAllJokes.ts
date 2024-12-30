import Joke from "../../model/jokes/jokeModel";

export async function getAllJokes(req: any, res: any) {
  try {
    const jokes = await Joke.find();
    return res.status(200).json({ jokes: jokes });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
