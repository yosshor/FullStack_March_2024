import mongoose, { Schema, Document } from 'mongoose';


export interface IJoke extends Document {
    joke: string;
}

const JokeSchema: Schema = new Schema({
    joke: { type: String, required: true },
});

const Joke = mongoose.model<IJoke>('Joke', JokeSchema);

export default Joke;