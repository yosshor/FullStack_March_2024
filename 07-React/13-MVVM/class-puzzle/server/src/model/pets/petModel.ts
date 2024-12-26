import mongoose from "mongoose";
import { spec } from "node:test/reporters";
import { UserSchema } from "../users/userModel";

export const PetSchema = new mongoose.Schema({
    name:String,
    species:String,
    age:Number,
    price:Number,
    client:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

export const Pet = mongoose.model('Pet',PetSchema);