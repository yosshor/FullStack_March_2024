// src/backend/routes/currency.ts
import express from 'express';
import { addNewCurrency, deleteCurrency, getAllCurrencies, updateCurrency } from '../controllers/currencyController';

const router = express.Router();

// Add new currency
router.post('/', addNewCurrency);

// Get all currencies
router.get('/', getAllCurrencies);

// Update currency
router.put('/:id', updateCurrency);

// Delete currency
router.delete('/:id', deleteCurrency);

export default router;