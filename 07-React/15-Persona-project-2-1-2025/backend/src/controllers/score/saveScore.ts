import Score from "../../model/score/scoreModel";
import jwt from "jsonwebtoken";
import { secret } from "../users/setUser";

export const saveScore = async (req: any, res: any) => {
  try {
    const { score } = req.body;
    const cookie = req.cookies;
    const cookieName = process.env.COOKIE_NAME as string;
    const decodedData = jwt.verify(req.cookies[cookieName], secret());
    console.log("decodedData", decodedData,cookieName,cookie);
    if (
      typeof decodedData !== "string" &&
      "username" in decodedData &&
      "email" in decodedData
    ) {
      const { username, email } = decodedData;
      console.log(username, score, email);
      const newScore = new Score({ username, score, email });
      await newScore.save();
      res.status(201).json({ message: "Score saved successfully!" });
    } else {
      res.status(400).json({ error: "Invalid token data" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};


