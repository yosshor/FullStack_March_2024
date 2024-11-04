
import express from 'express';
import { getAllPets, getAllPetsUnderAge } from '../controllers/getPetsCont';
import {addPet} from '../controllers/setPets'
import { getPetID } from '../controllers/getPetID';
import { updatePetID } from '../controllers/updatePetID';
import { deletePetID } from '../controllers/deletePetID';

const router = express.Router()

router.get('/get-all-pets', getAllPets)
router.post('/add-pet',addPet)
router.get('/get-pet-id/:petId',getPetID);

router.put('/update-pet-id/:petId',updatePetID)
router.delete('/delete-pet-by-id',deletePetID)
export default router