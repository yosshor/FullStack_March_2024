
import express from 'express';
import { getAllPets, getAllPetsUnderAge } from '../controllers/pets/getPetsCont';
import {addPet} from '../controllers/pets/setPets'
import { getPetID } from '../controllers/pets/getPetID';
import { updatePetID } from '../controllers/pets/updatePetID';
import { deletePetID } from '../controllers/pets/deletePetID';

const router = express.Router()

router.get('/get-all-pets', getAllPets)
router.post('/add-pet',addPet)
router.get('/get-pet-id/:petID',getPetID)
router.put('/update-pet-id/:petId',updatePetID)
router.get('/get-pets-under-age/:age',getAllPetsUnderAge);
router.delete('/delete-pet-by-id',deletePetID)
export default router