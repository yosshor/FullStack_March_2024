//global scope
let a = 25;

function sayHello() {
    //the function scope

    console.log("Hello", a);
    let b = 12;
    a++; //no no !!!!! This will be a pure function
}


// console.log(b);
console.log("a1:", a);
sayHello();
console.log("a2:", a);


for (let i = 0; i < 10; i++) {
    //block scope
    console.log(`i: ${i}, a: ${a}`);
}

// console.log(x); //error

function sayHello2() {
    //the function scope
    let a = 80;
    console.log("Hello", a); //this a is a function scope variable, not a global one
    let b = 12;
    a++; //no no !!!!! This will be a pure function
    console.log("b:", b);
    console.log("a3 inner:", a);
}

console.log("a3:", a);
sayHello2();
console.log("a4:", a);

