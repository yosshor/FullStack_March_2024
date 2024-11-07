import express from "express";
import {
  createRecipe,
  getAllRecipes,
  likeRecipe,
  addComment,
} from "../controllers/recipeController";
import multer from "multer";

import authMiddleware, { recipeMiddleware } from "../middleware/authMiddleware"; // Use ES6 import here

const router = express.Router();
router.use(express.urlencoded( { extended: true } ));

const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("image"), createRecipe);
router.get("/get-all", recipeMiddleware, getAllRecipes);
router.post('/:id/like', likeRecipe);
router.post('/:id/comment', addComment);
// module.exports = router;
export default router;
