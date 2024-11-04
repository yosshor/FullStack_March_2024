import { addDepartment } from '../controllers/departmentController/addDepartment';
import { getAllDepartment } from '../controllers/departmentController/getAllDepartment';
import { deleteDepartment } from '../controllers/departmentController/deleteDepartment';

import  express  from 'express';


const router = express.Router();

router.post('/add-department', addDepartment);
router.get('/get-departments', getAllDepartment);
router.delete('/delete-department/:name', deleteDepartment);

export default router