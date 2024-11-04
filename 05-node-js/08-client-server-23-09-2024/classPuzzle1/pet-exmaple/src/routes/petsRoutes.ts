
import express from 'express';
import { getAllPets } from '../controllers/getPetsCont';
import {addPet} from '../controllers/setPets'
import { getPetID } from '../controllers/getPetID';
import { updatePetID } from '../controllers/updatePetID';
import { deletePetID } from '../controllers/deletePetID';

const router = express.Router()

router.get('/get-all-pets', getAllPets)
router.post('/add-pet',addPet)
router.get('/get-pet-id/:petID',getPetID)
router.put('/update-pet-id/:petID',updatePetID)
router.delete('/delete-pet-id/:petID',deletePetID)
export default router