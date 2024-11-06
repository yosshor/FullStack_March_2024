import { Comment } from "../models/Comment";
import { Recipe } from "../models/Recipe";
import { Like } from "../models/Like";

export const createRecipe = async (req: any, res: any) => {
  try {
    console.log(req.body);
    // const { userId } = req.cookies;
    console.log(req.userId);
    const {title, instructions, ingredients, cookingTime, servingSize, category, image } = req.body;
    const recipe = new Recipe({
      userId:req.userId,
      title: title,
      instructions:instructions,
      ingredients:ingredients,
      cookingTime:parseInt(cookingTime),
      servingSize:parseInt(servingSize),
      category:category,
      image:image
    })

    await recipe.save();
    res.status(200).send();
  } catch (err: any) {
    console.error(err.message)
    res.status(500).json({ error: err.message });
  }
};

export const getPosts = async (req: any, res: any) => {
  try {
    console.log("get all posts");

    //bring all the posts from all user, likes and comments populated
    // Aggregate posts with user details, likes count, and comments populated
    const posts = await Recipe.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $lookup: {
          from: "likes",
          localField: "_id",
          foreignField: "postId",
          as: "likes",
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "postId",
          as: "comments",
        },
      },
      {
        $unwind: {
          path: "$comments",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "comments.userId",
          foreignField: "_id",
          as: "comments.userDetails",
        },
      },
      {
        $addFields: {
          "comments.userDetails": {
            $arrayElemAt: ["$comments.userDetails", 0],
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          userDetails: { $first: "$userDetails" },
          content: { $first: "$content" },
          image: { $first: "$image" },
          likesCount: { $first: { $size: "$likes" } },
          comments: { $push: "$comments" },
          createdAt: { $first: "$createdAt" },
          updatedAt: { $first: "$updatedAt" },
        },
      },
      {
        $project: {
          userDetails: { $arrayElemAt: ["$userDetails", 0] },
          content: 1,
          image: 1,
          likesCount: 1,
          comments: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      },
    ]);

    res.json(posts);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const likePost = async (req: any, res: any) => {
  try {
    console.log("like post", req.params.postId);
    const like = new Like({
      postId: req.params.postId,
      userId: req.user.id,
    });
    await like.save();
    res.status(201).json(like);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const commentOnPost = async (req: any, res: any) => {
  try {
    const comment = new Comment({
      postId: req.params.postId,
      userId: req.user.id,
      content: req.body.content,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
