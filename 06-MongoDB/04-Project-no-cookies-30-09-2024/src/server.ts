import express from "express";
import path from "path";
import fs from "fs";
import productsRoutes from "./routes/productsRoutes";
import usersRoutes from "./routes/userRoutes";
import mongoose from "mongoose";
import { insertData }    from "./controllers/insertDataController";
import department from "./models/departmentModel/department";
import departmentRoutes from "./routes/departmentRoutes";


const app = express();
const port = 3000;

//read mongodb json settings
const secretPath = path.resolve(__dirname, "C:/Users/ShorY/source/repos/Yoss_Full_Stack_Course_March_24/FullStack_March_2024/secret/mongodb.json");
const secret = JSON.parse(fs.readFileSync(secretPath, "utf-8"));

const mongodbUri = secret.mongodb.uri;
insertData().catch((err) => console.log(err));


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

// app.use(express.static("public"));
// app.use("/users", express.static(path.join(__dirname, "../users")));
// app.use("/", express.static(path.join(__dirname, "../public")));

console.log(__dirname);

//products routes
app.use("/api/products", productsRoutes);

//users routes
app.use("/api/users", productsRoutes);

//departments routes
app.use("/api/departments", departmentRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
