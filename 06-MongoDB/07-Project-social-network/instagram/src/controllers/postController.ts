import { Comment } from "../models/Comment";
import { Post } from "../models/Post";
import { Like } from "../models/Like";

export const createPost = async (req: any, res: any) => {
  try {
    const post = new Post({
      userId: req.user.id,
      content: req.body.content,
      image: req.file ? req.file.path : null,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getPosts = async (req: any, res: any) => {
  try {
    console.log("get all posts");
    
    //bring all the posts from all user, likes and comments populated
        // Aggregate posts with user details, likes count, and comments populated
        const posts = await Post.aggregate([
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'userDetails'
            }
          },
          {
            $lookup: {
              from: 'likes',
              localField: '_id',
              foreignField: 'postId',
              as: 'likes'
            }
          },
          {
            $lookup: {
              from: 'comments',
              localField: '_id',
              foreignField: 'postId',
              as: 'comments'
            }
          },
          {
            $unwind: {
              path: '$comments',
              preserveNullAndEmptyArrays: true
            }
          },
          {
            $lookup: {
              from: 'users',
              localField: 'comments.userId',
              foreignField: '_id',
              as: 'comments.userDetails'
            }
          },
          {
            $addFields: {
              'comments.userDetails': { $arrayElemAt: ['$comments.userDetails', 0] }
            }
          },
          {
            $group: {
              _id: '$_id',
              userDetails: { $first: '$userDetails' },
              content: { $first: '$content' },
              image: { $first: '$image' },
              likesCount: { $first: { $size: '$likes' } },
              comments: { $push: '$comments' },
              createdAt: { $first: '$createdAt' },
              updatedAt: { $first: '$updatedAt' }
            }
          },
          {
            $project: {
              userDetails: { $arrayElemAt: ['$userDetails', 0] },
              content: 1,
              image: 1,
              likesCount: 1,
              comments: 1,
              createdAt: 1,
              updatedAt: 1
            }
          }
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
