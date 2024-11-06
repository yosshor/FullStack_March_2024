// src/frontend/api.ts
const API_URL = 'http://localhost:3000/api';

export async function addCurrency(name: string, code: string) {
    const response = await fetch(`${API_URL}/currencies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, code }),
    });
    return response.json();
}

export async function getCurrencies() {
    const response = await fetch(`${API_URL}/currencies`);
    return response.json();
}

export async function convertCurrency(amount: number, fromCurrency: string, toCurrency: string) {
    const response = await fetch(`${API_URL}/convert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, fromCurrency, toCurrency }),
    });
    return response.json();
}