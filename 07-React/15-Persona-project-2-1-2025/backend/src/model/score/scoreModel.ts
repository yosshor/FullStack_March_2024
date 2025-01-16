import mongoose from "mongoose";


export interface IJoke extends Document {
    username: string;
    score: number;
    date: Date;
}

const scoreSchema = new mongoose.Schema({
  username: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Score = mongoose.model<IJoke>('Score', scoreSchema);

export default Score;