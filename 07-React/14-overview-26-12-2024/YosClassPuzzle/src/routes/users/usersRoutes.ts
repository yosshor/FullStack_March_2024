import express from "express";
import { login, register } from "../../controllers/users/setUser";
import { getUser } from "../../controllers/users/getUser";


const router = express.Router();


router.post("/login", login).post("/register", register).get("/getUser", getUser);


export default router;