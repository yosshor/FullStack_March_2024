import { Request, Response } from "express";
import { User } from "../../model/users/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwt1 from "jwt-simple";

export const secret = (): string => {
  return process.env.SECRET as string;
};

const cookieName = process.env.COOKIE_NAME as string;

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password.trim());
    if (!isMatch) {
      console.log("Invalid credentials");
      return res.status(400).json({ error: "Invalid credentials" });
    }
    if (user) {
      //jwt
      const payload = {
        userId: user._id,
        email: user.email,
        username: user.username,
        role: "User",
      };

      const payloadJWT = jwt1.encode(payload, secret());
      res.cookie(cookieName, payloadJWT, {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: "lax", 
        secure: false
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

export async function register(req: Request, res: Response) {
  try {
    const { email, password, username } = req.body;

    //save username and password to database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: "User already exists" });
    }
    const hashedPassword = await getBcryptPass(password);
    const user = new User({
      email: email,
      password: hashedPassword,
      username: username,
    });
    await user.save();

    //jwt
    const payload = {
      userId: user._id,
      email: user.email,
      username: user.username,
      role: "User",
    };

    const payloadJWT = jwt1.encode(payload, secret());

    if (user) {
      // Set the userId cookie
      res.cookie(cookieName, payloadJWT, {
        httpOnly: false,
        sameSite: "lax", 
        secure: false, 
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

async function getBcryptPass(password: string) {
  try {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
  } catch (err: any) {
    throw new Error(err);
  }
}

// Method to compare password
const comparePassword = async (candidatePassword: string, password: string) => {
  return bcrypt.compare(candidatePassword, password);
};
