import express from 'express';
import usersRouter from './routes/users/usersRoutes';
import PetsRouter from './routes/pets/petsRoutes';
const app = express();
import cookieParser from 'cookie-parser';
const port = 3001;



//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://orlyjonathan:RPGlEXtRjIGBEfH2@orly.s78ke.mongodb.net/fs-mrc24').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

//middlewares
app.use(express.json());
app.use(cookieParser());


app.use(express.static('public'));

app.use('/users',usersRouter);
app.use('/pets',PetsRouter);


app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})