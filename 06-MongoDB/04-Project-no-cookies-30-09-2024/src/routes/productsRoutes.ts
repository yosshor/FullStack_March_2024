

import express from 'express';
import { getAllProducts } from '../controllers/productsController/getAllProducts';
import { deleteProduct } from '../controllers/productsController/deleteProduct';
import { createProduct } from '../controllers/productsController/createProduct';
import { updateProduct } from '../controllers/productsController/updateProduct';

const router = express.Router();

router.get('/get-all-products', getAllProducts);
router.delete('/delete-product/:id', deleteProduct);
router.post('/add-product', createProduct);
router.patch('/update-product/', updateProduct);


export default router