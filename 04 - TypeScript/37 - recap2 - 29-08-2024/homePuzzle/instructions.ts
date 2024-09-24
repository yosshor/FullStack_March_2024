// Exercise 1: forEach
// Create an interface for a Product and use forEach to log each product's name and price

interface Product {
    name: string;
    price: number;
    inStock: boolean;
  }
  
  const products: Product[] = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 50, inStock: true },
    { name: "Monitor", price: 200, inStock: true },
  ];
  
  // TODO: Use forEach to log each product's name and price
  
  // Exercise 2: map
  // Create an interface for a User and use map to create an array of user greetings
  
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  
  // TODO: Use map to create an array of strings in the format "Hello, {name}!"
  
  // Exercise 3: filter
  // Use the Product interface from Exercise 1 and filter to get only in-stock products
  
  // TODO: Use filter to create an array of only the in-stock products
  
  // Exercise 4: reduce
  // Create an interface for an Order and use reduce to calculate the total value of all orders
  
  interface Order {
    id: number;
    customerName: string;
    total: number;
  }
  
  const orders: Order[] = [
    { id: 1, customerName: "Alice", total: 50 },
    { id: 2, customerName: "Bob", total: 100 },
    { id: 3, customerName: "Charlie", total: 75 },
  ];
  
  // TODO: Use reduce to calculate the sum of all order totals
  
  // Exercise 5: find
  // Use the User interface from Exercise 2 and find to get a user by their id
  
  // TODO: Use find to get the user with id 2
  
  // Exercise 6: some
  // Use the Product interface from Exercise 1 and some to check if any product is expensive (price > 500)
  
  // TODO: Use some to check if any product has a price greater than 500
  
  // Exercise 7: every
  // Create an interface for a Student and use every to check if all students have passed
  
  interface Student {
    name: string;
    grade: number;
  }
  
  const students: Student[] = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 70 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 65 },
  ];
  
  // TODO: Use every to check if all students have a grade of 60 or higher
  
  // Exercise 8: sort
  // Use the Product interface from Exercise 1 and sort to order products by price (ascending)
  
  // TODO: Use sort to create a new array with products sorted by price in ascending order