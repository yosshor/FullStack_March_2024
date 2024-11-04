import { Request, Response } from "express";
import { User } from "../../model/users/userModel";
import jwt from "jwt-simple";
const bcrypt = require("bcrypt");

export async function login(req: any, res: any) {
  try {
    console.log(req.userId, req.role);
    const secret = process.env.SECRET!;

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // take the password and compare it to the hashed password in the database
    if (!user) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    const comparePassword = await bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    //jwt
    const payload = {
      userId: user._id,
      email: user.email,
      name: user.name,
      role: "user",
    };

    const payloadJWT = jwt.encode(payload, secret);
    console.log(payloadJWT);

    if (user) {
      res.cookie("userId", payloadJWT, {
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

export async function register(req: any, res: any) {
  try {
    const { email, password, name, isAdmin } = req.body;
    const checkAdmin = false; //isAdmin === "on" ? true : false;
    const bcryptPassword = bcrypt.hashSync(password, 10);
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ error: "User already exists" });
    }
    //save username and password to database
    const user = new User({
      email: email,
      password: bcryptPassword,
      name: name,
      isAdmin: checkAdmin,
    });


    await user.save();
    res.status(200).send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
