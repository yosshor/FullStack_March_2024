// src/backend/models/Currency.ts
import mongoose from 'mongoose';

const CurrencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  rates: [{ date: Date, rate: Number }],
});

export const Currency = mongoose.model('Currency', CurrencySchema);