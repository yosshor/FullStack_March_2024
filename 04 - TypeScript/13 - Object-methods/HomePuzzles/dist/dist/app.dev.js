"use strict";

// # Exercise 1: Object Property Calculation
// Task:
function calculateTotalCost() {
  return this.price * this.quantity;
}

var product1 = {
  name: 'Chair',
  price: 23.5,
  quantity: 3
};
console.log(product1.name);