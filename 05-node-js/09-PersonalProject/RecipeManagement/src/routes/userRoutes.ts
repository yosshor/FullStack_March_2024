import authMiddleware from "../middleware/authMiddleware" ; 
import express from "express";
import { uploadProfilePicture } from "../controllers/uploadPictureController";

const router = express.Router();
router.post('/uploadProfilePicture', uploadProfilePicture);

export default router;