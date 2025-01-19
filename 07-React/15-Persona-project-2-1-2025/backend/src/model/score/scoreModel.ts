import mongoose from "mongoose";

export interface IScore extends Document {
  email: string;
  username: string;
  score: number;
  date: Date;
}

const scoreSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Score = mongoose.model<IScore>("Score", scoreSchema);

export default Score;
