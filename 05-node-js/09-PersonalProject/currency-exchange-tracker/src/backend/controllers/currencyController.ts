// src/backend/routes/currency.ts
import express from 'express';
import { Currency } from '../models/currencyModel';


export async function addNewCurrency(req:any, res:any) {
  const { name, code } = req.body;
  const currency = new Currency({ name, code, rates: [] });
  currency.save().then((currency) => {
    res.status(201).send(currency);
  });
}


export async function getAllCurrencies(req:any, res:any) {
  Currency.find().then((currencies) => {
    res.status(200).send(currencies);
  });
}


export async function updateCurrency(req:any, res:any) {
  const { id } = req.params;
  const { name, code } = req.body;
  Currency.findByIdAndUpdate(id, { name, code }, { new: true }).then((currency) => {
    res.status(200).send(currency);
  });   
}


export async function deleteCurrency(req:any, res:any) {
  const { id } = req.params;
  Currency.findByIdAndDelete(id).then(() => {
    res.status(204).send();
  });
}