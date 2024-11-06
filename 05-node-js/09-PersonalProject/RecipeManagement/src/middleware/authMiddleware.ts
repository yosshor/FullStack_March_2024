import jwt from "jsonwebtoken";
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
    const {userId} = req.cookies;
    console.log(userId)
    req.userId = userId;
    next();
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
