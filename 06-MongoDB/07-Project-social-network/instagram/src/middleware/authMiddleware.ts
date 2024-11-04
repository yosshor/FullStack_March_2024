import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { a } from "vite/dist/node/types.d-aGj9QkWt";

function authMiddleware(req: any, res: Response, next: NextFunction): void {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    res.status(401).json({ error: "Access denied" });
    return;
  }

  try {
    const verified = jwt.verify(token, "your_jwt_secret");
    req.user = verified; 
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
