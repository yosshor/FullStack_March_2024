import express from "express";
import {
  createRecipe,
  getAllRecipes,
  likeRecipe,
  addComment,
} from "../controllers/recipeController";
import multer from "multer";

import authMiddleware from "../middleware/authMiddleware";
import recipeMiddleware, { recipeGetRecipeId } from "../middleware/recipeMidd";
import { uploadRecipePicture } from "../controllers/uploadRecipeController";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("image"), createRecipe);
router.post("/uploadRecipePicture", recipeGetRecipeId, uploadRecipePicture);
router.get("/get-all", recipeMiddleware, getAllRecipes);
router.post("/:id/like", likeRecipe);
router.post("/:id/comment", addComment);
// module.exports = router;
export default router;
