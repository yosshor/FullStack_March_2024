

import express from 'express';
import { getAllUsers } from '../controllers/usersController/getAllUsers';

const router = express.Router();

router.get('/get-all-users', getAllUsers)

export default router