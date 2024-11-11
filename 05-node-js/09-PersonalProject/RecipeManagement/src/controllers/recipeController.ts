import { Comment } from "../models/Comment";
import { Recipe } from "../models/Recipe";
import { Like } from "../models/Like";
import User from "../models/User";
import jwt from "jwt-simple";
import { getUserIdAndData } from "./uploadPictureController";
import mongoose from "mongoose";

export const createRecipe = async (req: any, res: any) => {
  try {
    const { userId, userData } = getUserIdAndData(req);

    const {
      title,
      instructions,
      ingredients,
      cookingTime,
      servingSize,
      category,
      image,
    } = req.body;
    const recipe = new Recipe({
      user: userId,
      title: title,
      instructions: instructions,
      ingredients: ingredients,
      cookingTime: parseInt(cookingTime),
      servingSize: parseInt(servingSize),
      category: category,
      image: image,
    });

    await recipe.save();
    res.status(200).send(recipe);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getAllRecipes = async (req: Request, res: any) => {
  try {
    // Populate the user field to get all user information
    const recipes = await Recipe.find()
      .populate("user")
      .populate({
        path: "comments",
        populate: { path: "userId" },
      })
      .populate("likes");
    res.status(200).json(recipes); // Send recipes if successful
  } catch (error) {
    console.error("Error fetching recipes:", error); // Log error details
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};


export const searchRecipes = async (req: any, res: any) => {
  try {
    const { query } = req.query;
    const recipes = await Recipe.find({
      title: { $regex: query, $options: "i" },
    })
      .populate("user")
      .populate({
        path: "comments",
        populate: { path: "userId" },
      })
      .populate("likes");
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

export const searchRecipesIngredients = async (req: any, res: any) => {
  try {
    const { query } = req.query;
    const recipes = await Recipe.find({
      ingredients: { $regex: query, $options: "i" },
    })
      .populate("user")
      .populate({
        path: "comments",
        populate: { path: "userId" },
      })
      .populate("likes");
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};

export const likeRecipe = async (req: any, res: any) => {
  try {
    const { userId, userData } = getUserIdAndData(req);
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    //check if user already liked the recipe
    if (recipe.likes.includes(new mongoose.Types.ObjectId(userId))) {
      //remove like
      const like = await recipe.likes.findIndex(
        (like: any) => like.user === userId
      );
      recipe.likes.splice(like, 1);
      await recipe.save();
      return res
        .status(200)
        .json({ ok: "User already liked the recipe, remove him" });
    }
    recipe.likes.push(new mongoose.Types.ObjectId(userId));
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Failed to like recipe" });
  }
};

export const addComment = async (req: any, res: any) => {
  try {
    const { userId, userData } = getUserIdAndData(req);
    const { text } = req.body;

    const comment = new Comment({
      userId: userId,
      content: text,
      recipeId: req.params.id,
    });
    await comment.save();

    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    recipe.comments.push(comment._id);
    await recipe.save();

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};
