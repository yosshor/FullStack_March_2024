
import express from 'express';
import { getAllPets } from '../controllers/pets/getPetsCont';
import { getAllUsers } from '../controllers/users/getAllUsers';


const router = express.Router()

router.get('/all-users', getAllUsers)
// router.post('/add-pet',addPet)
// router.get('/get-pet-id/:petID',getPetID)
// router.put('/update-pet-id/:petID',updatePetID)
// router.delete('/delete-pet-id/:petID',deletePetID)

export default router