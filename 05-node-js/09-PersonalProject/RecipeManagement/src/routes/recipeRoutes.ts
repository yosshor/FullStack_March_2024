import express from "express";
import {
  createRecipe,
  getPosts,
  likePost,
  commentOnPost,
} from "../controllers/recipeController";
import multer from "multer";

import authMiddleware from "../middleware/authMiddleware"; // Use ES6 import here

const router = express.Router();
router.use(express.urlencoded( { extended: true } ));

const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("image"), createRecipe);
router.get("/", authMiddleware, getPosts);

// module.exports = router;
export default router;
