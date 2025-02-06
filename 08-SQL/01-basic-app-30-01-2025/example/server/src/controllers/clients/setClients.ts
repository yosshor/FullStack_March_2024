import bcrypt from 'bcrypt';
import { pool } from '../../db';
import { Request, Response } from 'express';
const saltRounds = Number(process.env.SALT_BCRYPT) || 10;


export const secret = process.env.SECRET_JWT ?? "secret"



export async function register(req: Request, res: Response) {
    try {

        const { email, password } = req.body;
        if (!email || !password) throw new Error('Email and password are required');

        // Generate salt and hash password
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        // Insert user into database
        const [result]: any = await pool.execute(
            'INSERT INTO users (email, password_hash) VALUES (?, ?)',
            [email, passwordHash]
        );

        if (!result.insertId) {
            res.status(400).json({ error: 'User not created' });
            return;
        }

        res.status(201).json({ id: result.insertId });


    } catch (error: any) {
        console.log(error.code);
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ error: 'Email already exists' });
            return;
        }
        console.error('Error registering user:', error.message);
        res.status(500).json({ error: error.message });
    }
}