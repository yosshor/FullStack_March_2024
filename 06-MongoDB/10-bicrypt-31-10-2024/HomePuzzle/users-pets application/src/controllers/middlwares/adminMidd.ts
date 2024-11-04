import jwt from "jwt-simple";
import "dotenv/config";

// check if user is admin
export async function checkAdmin(req: any, res: any, next: any) {
  try {
    const secret = process.env.ADMIN_SECRET!;

    // get the userId from the cookies
    const { userId } = req.cookies;
    if (!userId) {
      res.status(401).send({ error: "User not found" });
      return;
    }
    
    // jwt decode
    const user = jwt.decode(userId, secret);
    console.log("userAdmin",user);

    if (!user) {
      res.status(401).send({ error: "User not found" });
      return;
    }

    if (user.isAdmin === false) {
      res.status(401).send({ error: "User is not admin" });
      return;
    }

    req.userId = user.userId;
    req.isAdmin = user.isAdmin === true ? "Admin" : "User";
    next();
    console.log("next Admin");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
}
