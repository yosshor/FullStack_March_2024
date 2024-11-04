import express from "express";
import petsRouter from "./routes/petsRoutes";
import usersRouter from "./routes/UserRoutes";

import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import { MongoDBConnector } from "./mongodb_connector/mongodbConnector";

const app = express();
const port = 3000;

//read mongodb json settings
const secretPath = path.resolve(__dirname, "C:/Users/ShorY/source/repos/Yoss_Full_Stack_Course_March_24/FullStack_March_2024/secret/mongodb.json");
const secret = JSON.parse(fs.readFileSync(secretPath, "utf-8"));

const mongodbUri = secret.mongodb.uri;
// const mongodbConnector = new MongoDBConnector(mongodbUri);
// mongodbConnector.connect();

//connect to mongodb
mongoose
  .connect(mongodbUri, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

app.use(express.json());

app.use(express.static("public"));
app.use('/', express.static(path.join(__dirname, '../public')))
console.log(__dirname);
app.use('/users', express.static(path.join(__dirname, '../users')))

app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
