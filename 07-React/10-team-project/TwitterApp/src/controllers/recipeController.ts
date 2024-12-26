import { Comment } from "../models/Comment";
import { Post } from "../models/Post";
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
    const recipe = new Post({
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

export const updateRecipe = async (req: any, res: any) => {
  try {
    const { userId, userData } = getUserIdAndData(req);
    console.log("updateRecipe");
    const {
      title,
      instructions,
      ingredients,
      cookingTime,
      servingSize,
      category,
      image,
    } = req.body;
    const post = await Post.findById(req.body.recipeId);
    if (!post) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    if (post.userId.toString() !== userId) {
      return res.status(401).json({ error: "User not authorized" });
    }
    // post.content = title;
    // post.instructions = instructions;
    // post.ingredients = ingredients;
    // post.cookingTime = parseInt(cookingTime);
    // post.servingSize = parseInt(servingSize);
    // post.category = category;
    // post.image = image;
    // await post.save();
    res.status(200).send(post);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getAllRecipes = async (req: Request, res: any) => {
  try {
    // Populate the user field to get all user information
    const recipes = await Post.find()
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
export const getRecipeData = async (req: any, res: any) => {
  try {
    const recipeId = req.params.Id;
    // Populate the user field to get all user information
    const recipe = await Post.findById(recipeId)
      .populate("user")
      .populate({
        path: "comments",
        populate: { path: "userId" },
      })
      .populate("likes");
    res.status(200).json(recipe); // Send recipes if successful
  } catch (error) {
    console.error("Error fetching recipes:", error); // Log error details
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};
export const searchRecipes = async (req: any, res: any) => {
  try {
    const { query } = req.query;
    const recipes = await Post.find({
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

export const deleteRecipe = async (req: any, res: any): Promise<void> => {
  try {
    const recipeId = req.params.Id;
    const { userId, userData } = getUserIdAndData(req);
    const recipe = await Post.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    if (recipe.userId.toString() !== userId) {
      return res.status(401).json({ error: "User not authorized" });
    }
    await Post.deleteOne({ _id: recipe._id });
    res.status(200).json({ message: "Recipe removed" });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ error: "Failed to delete recipe" });
  }
};

export const searchRecipesIngredients = async (
  req: any,
  res: any
): Promise<void> => {
  try {
    const { query } = req.query;
    const recipes = await Post.find({
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

export const searchRecipesCategory = async (
  req: any,
  res: any
): Promise<void> => {
  try {
    const { query } = req.query;
    const recipes = await Post.find({
      category: { $regex: query, $options: "i" },
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

export const searchRecipesCookingTime = async (
  req: any,
  res: any
): Promise<void> => {
  try {
    const { query } = req.query;
    const cookingTime = parseInt(query, 10);
    if (isNaN(cookingTime)) {
      return res.status(400).json({ error: "Invalid cooking time" });
    }
    const recipes = await Post.find({
      cookingTime: cookingTime,
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

export const likeRecipe = async (req: any, res: any): Promise<void> => {
  try {
    const { userId, userData } = getUserIdAndData(req);
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    // //check if user already liked the recipe
    // if (recipe.likes.includes(new mongoose.Types.ObjectId(userId))) {
    //   //remove like
    //   const like = await recipe.likes.findIndex(
    //     (like: any) => like.user === userId
    //   );
    //   recipe.likes.splice(like, 1);
    //   await recipe.save();
    //   return res
    //     .status(200)
    //     .json({ ok: "User already liked the recipe, remove him" });
    // }
    // recipe.likes.push(new mongoose.Types.ObjectId(userId));
    // await recipe.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to like recipe" });
  }
};

export const addComment = async (req: any, res: any): Promise<void> => {
  try {
    const { userId, userData } = getUserIdAndData(req);
    const { text } = req.body;

    const comment = new Comment({
      userId: userId,
      content: text,
      recipeId: req.params.id,
    });
    await comment.save();

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    // recipe.comments.push(comment._id);
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};
