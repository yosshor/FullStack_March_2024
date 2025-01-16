import mongoose, { Schema, Document } from 'mongoose';


export interface IJoke extends Document {
    joke: string;
}

const JokeSchema: Schema = new Schema({
    joke: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true}
});

const Joke = mongoose.model<IJoke>('Joke', JokeSchema);

export default Joke;