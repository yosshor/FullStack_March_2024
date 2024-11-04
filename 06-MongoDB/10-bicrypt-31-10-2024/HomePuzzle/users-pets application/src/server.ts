import express from 'express';
import usersRouter from './routes/users/usersRoutes';
import PetsRouter from './routes/pets/petsRoutes';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import adminRoutes from './routes/admin/adminRoutes';
import 'dotenv/config';

const app = express();
const port = 3000;

const dbUri = process.env.MONGO_DB_CONNECTION!;

//connection to db
mongoose.connect(dbUri).then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/users',usersRouter);
app.use('/pets',PetsRouter);
app.use('/api/admin', adminRoutes);


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})