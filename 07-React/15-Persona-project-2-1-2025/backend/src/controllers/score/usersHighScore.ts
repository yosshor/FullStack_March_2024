import Score from "../../model/score/scoreModel";

export const getHighScores = async (req: any, res: any) => {
    try {
      const scores = await Score.aggregate([
        {
          $group: {
            _id: '$email',
            maxScore: { $max: '$score' },
            username: { $first: '$username' },
            date: { $first: '$date' },
          },
        },
        {
          $sort: { maxScore: -1 },
        },
        {
          $limit: 10,
        },
      ]);
  
      res.status(200).json(scores);   
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
  