import express from 'express';
import { addClient } from '../controllers/users/setUserCont';
import { getUserPets } from '../controllers/user-pet/getUserPetsCont';
import { updatePetsOwner } from '../controllers/user-pet/setUserPetsCont';



const router = express.Router()
router.post('/add-client', addClient)
router.get("/get-client-pets",getUserPets)
router.post('/set-pet-owner', updatePetsOwner)

export default router