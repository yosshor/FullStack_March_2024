// get all users from mongoose
import mongoose from "mongoose";

import User from "../../models/usersModel/user";

export const getAllUsers = async (req:any, res:any) =>{
    try {
        console.log("get all users");
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Cant get users"});
        
    }

}