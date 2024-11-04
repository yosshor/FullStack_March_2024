import express from 'express';
import {  login, register } from '../controllers/users/setUser';



const router = express.Router()
router.post('/add-user', login)
router.post("/login", login)
router.post("/register", register)


export default router