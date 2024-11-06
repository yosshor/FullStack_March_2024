import authMiddleware from "../middleware/authMiddleware" ; 
import express from "express";
import { uploadProfilePicture } from "../controllers/uploadPictureController";

const router = express.Router();
router.post("/upload-profile-picture", authMiddleware, uploadProfilePicture);

export default router;