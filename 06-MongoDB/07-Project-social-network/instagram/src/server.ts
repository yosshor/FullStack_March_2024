import express from "express";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;
console.log("Server starting...")
app.use(bodyParser.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(express.static(path.join(__dirname, "../public")));

//get secret file
const secretPath = path.resolve(
  __dirname,
  "C:/Users/ShorY/source/repos/Yoss_Full_Stack_Course_March_24/FullStack_March_2024/secret/mongodb.json"
);
const secret = JSON.parse(fs.readFileSync(secretPath, "utf-8"));

//get mongodb uri
const mongodbUri = secret.mongodb.uri;

//connection to db
mongoose
  .connect(mongodbUri)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err: any) => {
    console.log(err);
  });


app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

