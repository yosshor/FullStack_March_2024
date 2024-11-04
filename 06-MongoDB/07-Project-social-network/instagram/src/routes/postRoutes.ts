import express from "express";
import {
  createPost,
  getPosts,
  likePost,
  commentOnPost,
} from "../controllers/postController";
import multer from "multer";

import authMiddleware from "../middleware/authMiddleware"; // Use ES6 import here

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("image"), createPost);
router.get("/", authMiddleware, getPosts);
router.post("/:postId/like", authMiddleware, likePost);
router.post("/:postId/comment", authMiddleware, commentOnPost);

// module.exports = router;
export default router;
