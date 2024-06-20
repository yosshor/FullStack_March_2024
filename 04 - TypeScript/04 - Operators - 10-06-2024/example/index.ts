console.log('exercise 1:',16%8); //modulus operator returns the remainder of a division operation

//let us know if a number is even or odd
console.log('exercise 2:', 16%2); // 16/3 = 5 remainder 1

function isEven(num: number): boolean|undefined {
    try {
        if(typeof num !== 'number') throw new Error("Please provide a number");
        return num % 2 === 0;
    } catch (error) {
        console.error(error);  
        return undefined; 
    }
   
}

console.log('16 is even', isEven(16)); //true
console.log('15 is even', isEven(15)); //false
//@ts-ignore
console.log('15 is even', isEven('15')); //undefined

console.log('2**', 2**3); // 2^3 = 8 -> 2*2*2
console.log('2**', 2**4); // 2^4 = 16 -> 2*2*2*2

// Assignment operators
let x = 10;
x += 5; // x = x + 5
x += 10; // x = x + 10, x = 25;

x -= 5; // x = x - 5, x = 20;

x *= 2; // x = x * 2, x = 40;

x /= 2; // x = x / 2, x = 20;