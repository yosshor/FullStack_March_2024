import mongoose, { Schema, Document } from 'mongoose';


export interface IFavorite extends Document {
    jokeId: string;
    userId: string;
}

const FavoriteSchema: Schema = new Schema({
    jokeId: { type: mongoose.Schema.Types.ObjectId, ref: "Joke", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true}
});

const Favorite = mongoose.model<IFavorite>('Favorite', FavoriteSchema);

export default Favorite;