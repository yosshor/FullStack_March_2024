// src/frontend/d3-visualization.ts
import * as d3 from 'd3';

export function drawChart(currencies: any[]) {
    const svg = d3.select('#exchange-rates-chart')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%');

    // Example data
    const data = currencies.map(currency => ({
        name: currency.name,
        rate: currency.rates.length ? currency.rates[currency.rates.length - 1].rate : 0,
    }));

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.rate)!]).nice()
        .range([height - margin.bottom, margin.top]);

    const xAxis = (g: any) => g
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = (g: any) => g
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

    svg.append('g')
        .selectAll('rect')
        .data(data)
        .join('rect')
        .attr('x', d => x(d.name)!)
        .attr('y', d => y(d.rate))
        .attr('height', d => y(0) - y(d.rate))
        .attr('width', x.bandwidth());

    svg.append('g')
        .call(xAxis);

    svg.append('g')
        .call(yAxis);
}