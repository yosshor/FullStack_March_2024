import { User } from "../../model/userModel";
import { Request, Response } from "express";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    //check if user exists
    const user = await userExists(email, password);
    console.log(user);
    if (user) throw new Error("User already exists");

    if (user) {
      res.cookie("userId", user._id, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 1,
      });
      res.status(200).send({ ok: true });
    } else {
      res.status(401).send({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

//check if user exists
const userExists = async (email: string, password: string): Promise<any | null> => {
  const user = await User.findOne({ email, password });
  return user;
};

export async function register(req: Request, res: Response) {
  try {
    const { email, password, name } = req.body;

    //save username and password to database
    const user = new User({ email, password, name });

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: "User already exists" });
    }

    await user.save();
    //@ts-ignore

    res.status(200).send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
