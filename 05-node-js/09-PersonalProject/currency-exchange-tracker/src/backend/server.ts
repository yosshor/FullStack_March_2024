// src/backend/server.ts
import express from "express";
import mongoose from "mongoose";
import currencyRoutes from "./routes/currencyRoute";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("forntend"));
app.use(express.json());

// Connect to MongoDB
const dbUri = process.env.MONGO_DB_CONNECTION!;

//connection to db
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err: any) => {
    console.log(err);
  });

// Use currency routes
app.use("/api/currencies", currencyRoutes);
app.use("/", (req: any, res: any) => {
    res.send("Hello from the server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
