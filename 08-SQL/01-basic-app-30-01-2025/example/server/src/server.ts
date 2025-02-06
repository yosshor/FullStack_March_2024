import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors'; //npm install cors

const app = express()
const port = 3000;
app.use(cors({
  origin: 'http://localhost:5174', // allow to server to accept request from different origin
  credentials: true
}))

app.use(express.json());
app.use(express.static('client/build'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//routes
import clientsRouter from './routes/clients/clientRoutes';
app.use("/api/clients", clientsRouter);
// import productsRouter from './routes/products/productRoute';
// app.use("/api/products", productsRouter);
// import commentsRouter from './routes/comments/commentsRoute';
// app.use("/api/comments", commentsRouter);
// import Purchase from "./routes/purchase/purchaseRouter";
// app.use("/api/purchase", Purchase);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})