import jwt from "jsonwebtoken";
import jwt1 from "jwt-simple"

import { Request, Response, NextFunction } from "express";

function authMiddleware(req: any, res: Response, next: NextFunction): void {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    console.log("access denied")
    res.status(401).json({ error: "Access denied" });
    return;
  }

  try {
    const verified = jwt.verify(token, "your_jwt_secret");
    req.user = verified; 
    const {userRecipe} = req.cookies;
    const secret = process.env.SECRET!;
    const {userId, email} = jwt1.decode(userRecipe, secret)
    console.log(userId,email)
    console.log(userRecipe)
    req.userId = userRecipe.userId;
    next();
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: "Invalid token" });
  }
};

export function recipeMiddleware(req: any, res: Response, next: NextFunction){
  try {
    const {userRecipe} = req.cookies;
    const secret = process.env.SECRET!;
    // jwt decode
    const user = jwt1.decode(userRecipe, secret);
    console.log(user);

    if (!user) {
        res.status(401).send({ error: 'User not found' });
        return;
    }
    const {userId, email, name, role} = user;
    if (!userId) {
      res.status(401).send({ error: 'User not found' });
      return;
  } 
    console.log(userId, email, name , role)
    req.userId = userId;
    req.isAdmin = role === true ? "Admin" : "User";
    next();

    
  } catch (error) {
    console.error(error)
  }
}



export default authMiddleware;
