
import express from 'express';
import { getAllPets } from '../controllers/pets/getPetsCont';
import {addPet} from '../controllers/pets/setPets'
import { getPetID } from '../controllers/pets/getPetID';
import { updatePetID } from '../controllers/pets/updatePetID';
import { deletePetID } from '../controllers/pets/deletePetID';

const router = express.Router()

router.get('/get-all-pets', getAllPets)
router.post('/add-pet',addPet)
router.get('/get-pet-id/:petID',getPetID)
router.put('/update-pet-id/:petID',updatePetID)
router.delete('/delete-pet-id/:petID',deletePetID)
export default router