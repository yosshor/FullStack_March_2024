console.log("hello")
//variable declaration
let x: number = 100;
let y: number = 20;

let z = x + y;
console.log("z = ", z);

let a: number = 40;
let b: number = 70;
let c = a + b;
console.log(c);


// a function is block of code that used to perform a specific task and you can use it repeatedly

// function declaration

//function nameOfFunction( parameters ){
//    //code block
//      take the parameters and return the value
// return value;
//}
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));
console.log(add(30, 40));
console.log(add(50, 70));

// create a function that takes two numbers and return divie the first number by the second number and return the result
