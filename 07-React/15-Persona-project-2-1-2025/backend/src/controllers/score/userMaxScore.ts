import jwt from "jsonwebtoken";
import { secret } from "../users/setUser";
import Score from "../../model/score/scoreModel";

export const getUserMaxScores = async (req: any, res: any) => {
  try {
    const cookieName = process.env.COOKIE_NAME as string;

    const token = req.cookies[cookieName]; // Adjust the cookie name as needed
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized. No token found.' });
    }
    const decodedData = jwt.verify(token, secret());
    const { email } = decodedData as { email: string };

    const maxScore = await Score.aggregate([
      { $match: { email } },
      { $group: { _id: '$email', maxScore: { $max: '$score' } } },
    ]);

    if (maxScore.length === 0) {
      return res.status(200).json({ email:'', maxScore: 0 });
    }

    res.status(200).json({ email, maxScore: maxScore[0].maxScore });
  
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
