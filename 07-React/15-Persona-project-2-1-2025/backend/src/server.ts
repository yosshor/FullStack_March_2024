import express from "express";
import cors from "cors";
import "dotenv/config";
import usersRouter from "./routes/users/usersRoutes";
import cookieParser from "cookie-parser";
import scoreRoutes from "./routes/score/scoreRoutes";
import mongoose from "mongoose";

const app = express();

//connection to db
const dbUrl = process.env.DB_URL;
const database = process.env.DB_NAME;
const port = process.env.PORT;

mongoose
  .connect(`${dbUrl}${database}`)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err: any) => {
    console.log(err);
  });

//middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Your React app origin
    credentials: true, // Allow cookies to be sent with requests
  })
);

const apiRouter = express.Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/scores", scoreRoutes);

app.use("/api", apiRouter);

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
