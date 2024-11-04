import mongoose from "mongoose";
import { User } from "../../model/users/userModel";

export const getAllUsers = async (req: any, res: any): Promise<void> => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(404).send("No users found");
      return;
    }
    res.status(200).send({ users: users });
    console.log('send users')
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: error });
  }
};
