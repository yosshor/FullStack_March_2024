import express from 'express';
import { register } from '../../controllers/clients/setClients';
const router = express.Router();

router.post("/register", register);


export default router