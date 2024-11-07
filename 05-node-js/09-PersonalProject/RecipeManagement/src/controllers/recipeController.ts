import { Comment } from "../models/Comment";
import { Recipe } from "../models/Recipe";
import { Like } from "../models/Like";
import User from "../models/User";
import jwt from 'jwt-simple'

export const createRecipe = async (req: any, res: any) => {
  try {
    const {userRecipe} = req.cookies;
    const secret = process.env.SECRET!;
    // jwt decode
    const user = jwt.decode(userRecipe, secret);
    const userIds = user.userId;
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
      userId: userIds,
      title: title,
      instructions: instructions,
      ingredients: ingredients,
      cookingTime: parseInt(cookingTime),
      servingSize: parseInt(servingSize),
      category: category,
      image: image,
    });

    await recipe.save();
    res.status(200).send();
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const getAllRecipes = async (req: Request, res: any) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
};
export const likeRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    recipe.likes.push(req.body.userId);
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to like recipe' });
  }
};


export const addComment = async (req: any, res: any) => {
  try {
    const { userId, text } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const comment = new Comment({ user: userId, text });
    await comment.save();

    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    recipe.comments.push(comment._id);
    await recipe.save();

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};