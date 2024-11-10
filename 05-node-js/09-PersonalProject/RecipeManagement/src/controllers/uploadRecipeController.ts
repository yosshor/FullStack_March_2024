import multer from "multer";
import path from "path";
import { getUserIdAndData } from "./uploadPictureController";
import { Recipe } from "../models/Recipe";

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, "uploads/recipes/");
  },
  filename: (req: any, file: any, cb: any) => {
    // const { userId, userData } = getUserIdAndData(req);
    const recipeId = req.recipeId ;// req.query.recipeId;
    cb(null, `${recipeId}${path.extname(file.originalname)}`);
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage });
// Controller to handle profile picture upload
export const uploadRecipePicture = [
  upload.single("image"),
  async (req: any, res: any) => {
    try {
      console.log("uploading recipe image file to server");
      const recipeId = req.recipeId ;// req.query.recipeId;
      console.log(recipeId);
      const recipe = await Recipe.findById(recipeId);
      if (recipe) {
        recipe.image = req.file.path;
        console.log("recipe image path", req.file.path);
        await recipe.save();
        console.log("successfully upload and save path into recipe details");
        res.json(recipe);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  },
];
