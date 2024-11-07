import jwt from "jsonwebtoken";
import jwt1 from "jwt-simple";

import { Request, Response, NextFunction } from "express";
import { getUserIdAndData } from "../controllers/uploadPictureController";

function authMiddleware(req: any, res: Response, next: NextFunction): void {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    console.log("access denied");
    res.status(401).json({ error: "Access denied" });
    return;
  }

  try {
    const verified = jwt.verify(token, "your_jwt_secret");
    req.user = verified;
    const { userRecipe } = req.cookies;
    const secret = process.env.SECRET!;
    const { userId, email } = jwt1.decode(userRecipe, secret);
    next();
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid token" });
  }
}

export function recipeMiddleware(req: any, res: Response, next: NextFunction) {
  try {
    const { userData } = getUserIdAndData(req);

    if (!userData) {
      res.status(401).send({ error: "User not found" });
      return;
    }
    let parsedUserData;
    try {
      parsedUserData = JSON.parse(JSON.stringify(userData));
    } catch (error) {
      res.status(400).send({ error: "Invalid user data" });
      return;
    }
    const { userId, email, name, role } = parsedUserData;
    if (!userId) {
      res.status(401).send({ error: "User not found" });
      return;
    }
    next();
  } catch (error) {
    console.error(error);
  }
}

export default authMiddleware;
