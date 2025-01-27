console.log("Hello World 2");

//deconstructor
const x = { a: 1, b: 2, c: 3, d: 4, fn: () => {} };

const { a, b } = x;
console.log(a, b);

const a1 = x.a;
const b1 = x.b;


const arr = [1,2,3,4,5,6,7,8,9,10];
const [first, second, ...rest] = arr;
console.log(first, second, rest);

const first1= arr[0];
const second1 = arr[1];
const rest1 = arr.slice(2);

//spread operator
const arr1 = [11, 12, 13,...arr];
console.log(arr1);

const obj1 = { ...x, e: 5, f: 6 };
console.log(obj1);