import { addPet, allPets } from "../controllers/pets";

const petRouter = require('express').Router();


petRouter.get('/all-pets', (req: any, res: any) => {
    console.log('all pets');
    res.send(allPets);
})

petRouter.post('/add-pet', (req: any, res: any) => {
    console.log('add pet');
    let { name, age, species, price, imageUrl } = req.query;
    age = parseInt(age);
    price = parseInt(price);
    console.log(name, age, species, price, imageUrl);
    const allPets = addPet(name, age, species, price, imageUrl);
    res.send({ 'allPets': allPets });
})

module.exports = petRouter;