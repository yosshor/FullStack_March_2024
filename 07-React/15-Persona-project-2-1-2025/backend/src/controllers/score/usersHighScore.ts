import Score from "../../model/score/scoreModel";

export const getHighScores = async (req: any, res: any) => {
  try {
    const scores = await Score.aggregate([
      {
        $group: {
          _id: "$email",
          maxScore: { $max: "$score" },
          username: { $first: "$username" },
          date: { $first: "$date" },
        },
      },
      {
        $sort: { maxScore: -1 },
      },
      {
        $limit: 10,
      },
    ]);
    if (!scores) {
      console.log("no scores");
      return res.status(200).json({ email: "", maxScore: 0 });
    }
    res.status(200).json(scores);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: (error as Error).message });
  }
};
