import { Request, Response } from 'express';
import { User } from '../../model/users/userModel'
import jwt from 'jwt-simple';
import 'dotenv/config'



export async function login(req: Request, res: Response) {
    try {
       const secret= process.env.DB_PASSWORD as string
        console.log(secret)
        const { email, password } = req.body;
        console.log(email, password)

        const user = await User.findOne({ email, password });
      
        if (!user) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        //jwt
        const payload = {
            userId: user._id,
            email: user.email,
            name: user.name,
            role: user.isAdmin ? 'admin' : 'user'
        };

        const payloadJWT = jwt.encode(payload, secret);
        console.log(payloadJWT)

        if (user) {
            res.cookie('userId', payloadJWT, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 1 });
            res.status(200).send({ ok: true });
        } else {
            res.status(401).send({ error: 'Invalid email or password' });
        }

    } catch (error) {
        console.error(error)
        res.status(500).send(error);

    }
}

export async function register(req: Request, res: Response) {
    try {
        const { email, password, name } = req.body;

        //save username and password to database
        const user = new User({ email, password, name });


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'User already exists' })
        }

        await user.save()
        //@ts-ignore


        res.status(200).send({ ok: true });

    } catch (error) {
        console.error(error)
        res.status(500).send(error);

    }
}