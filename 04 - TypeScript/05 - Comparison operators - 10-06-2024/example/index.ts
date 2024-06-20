console.log(1 > 2); // true

let x = 2;
let y = 5;
console.log(x = y); //assignment operator
console.log(x == y); //comparison operator

let z = "5";
console.log(x == z); // true
console.log(x === z); // false strict equality operator

console.log(x != y); // false
console.log(x !== y); //false


function isToddler(age: number): boolean | undefined {
    try {
        let maxToddlerAge = 2;
        if (age <= maxToddlerAge) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error)
        return undefined
    }
}

console.log("1.5 years old:", isToddler(1.5));
console.log("3 years old: ", isToddler(3))




























//falsifiable values
// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log('' == false); // true
// console.log('' === false); // false
// console.log(null == false); // false
// console.log(null === false); // false
// console.log(undefined == false); // false
// console.log(undefined === false); // false
// console.log(NaN == false); // false
// console.log(NaN === false); // false
// console.log([] == false); // true
// console.log([] === false); // false

