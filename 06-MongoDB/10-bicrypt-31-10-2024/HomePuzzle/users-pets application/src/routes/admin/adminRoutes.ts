import { Router } from 'express';
import { registerAdmin, loginAdmin } from '../../controllers/admin/adminController';
import { getAllUsers } from '../../controllers/admin/getAllUsers';
import { checkAdmin } from '../../controllers/middlwares/adminMidd';
import { logout } from '../../controllers/logout';

const router = Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin)
router.get('/getAllUsers', checkAdmin, getAllUsers).get('/logout', logout);
export default router;