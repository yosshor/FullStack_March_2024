// src/frontend/index.ts
import { addCurrency, getCurrencies, convertCurrency } from './api';
import { drawChart } from './d3-visualization';

document.addEventListener('DOMContentLoaded', () => {
    const currencyForm = document.getElementById('currency-form') as HTMLFormElement;
    const currencyList = document.getElementById('currency-list') as HTMLUListElement;
    const conversionForm = document.getElementById('conversion-form') as HTMLFormElement;
    const conversionResult = document.getElementById('conversion-result') as HTMLDivElement;

    currencyForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = (document.getElementById('currency-name') as HTMLInputElement).value;
        const code = (document.getElementById('currency-code') as HTMLInputElement).value;
        await addCurrency(name, code);
        loadCurrencies();
    });

    conversionForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const amount = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
        const fromCurrency = (document.getElementById('from-currency') as HTMLInputElement).value;
        const toCurrency = (document.getElementById('to-currency') as HTMLInputElement).value;
        const result = await convertCurrency(amount, fromCurrency, toCurrency);
        conversionResult.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    });

    async function loadCurrencies() {
        const currencies = await getCurrencies();
        currencyList.innerHTML = '';
        currencies.forEach(currency=> {
            const li = document.createElement('li');
            li.textContent = `${currency.name} (${currency.code})`;
            currencyList.appendChild(li);
        });
        drawChart(currencies);
    }

    loadCurrencies();
});