import Score from "../../model/score/scoreModel";

export const saveScore = async (req: any, res: any) => {
  try {
    const { username, score } = req.body;
    const newScore = new Score({ username, score });
    await newScore.save();
    res.status(201).json({ message: "Score saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getHighScores = async (req: any, res: any) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
