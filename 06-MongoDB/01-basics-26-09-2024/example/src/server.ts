import express from 'express';
import petsRouter from "./routes/petsRoutes";
import { PetModel } from './model/petModel';
const app = express()
const port = 3000;


//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tal:k8w0S6ztTx3zowGW@cluster0.0hzknon.mongodb.net/fs-mrc24').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});

// const Cat = mongoose.model('Cat', { name: String, date:String }); //create a model/ schema

// const kitty = new Cat({ name: 'Kitty', date:'2021-09-26' }); //instance of the model
// kitty.save().then(() => console.log('meow')).catch((err:any)=>console.log(err)); //save the instance to the db

// const pet = new PetModel({ name: 'rocky', species: 'dog', age: 13, price: 50, imageURL: 'https://www.google.com' });
// pet.save().then(() => console.log('pet saved')).catch((err:any)=>console.log(err));  

//FIND IN COLLECTION
PetModel.find().then((pets:any)=>{
  console.log(pets)
}).catch((err:any)=>{
  console.log(err)
})


app.use(express.json());


app.use(express.static('public'));

app.use('/pets',petsRouter)

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})