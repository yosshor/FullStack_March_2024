// # Filtering even numbers:
// Create a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.
// Use the filter method to accomplish this.

//option 1
const arr = [2, 3, 4, 5, 5, 67, 7, 5, 5, 7, 8, 12];

function filterEvenNumbers(arr: number[]): number[] | undefined {
    try {
        return arr.filter((elm) => elm % 2 == 0)
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//option 2
const filterEvenNumArrow: any = (_arr: number[]) => _arr.filter(element => element % 2 == 0)

// option 3
const filterEven: number[] = [1, 2, 3, 4, 5, 6, 7, 9].filter(element => element % 2 == 0)


console.log(filterEvenNumbers(arr));
console.log(filterEvenNumArrow(arr));
console.log(filterEven);



// # Mapping square values:
// Create a function called mapSquareValues that takes an array of numbers as input and returns a new array with each number squared.
// Use the map method to accomplish this.

//Mapping function 
//option 1
function mapSquareValues(arr: number[]): number[] | undefined {
    try {
        let values: number[] = arr.map((element) => Math.sqrt(element));
        return values;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//option 2
const mapSquareValuesArrow = (_arr: number[]) => (arr.map((e) => Math.sqrt(e)))

//option 3
const mapSqrtShort = function (ele: number[]): number[] { return arr.map((function (e: number) { return Math.sqrt(e) })) }

const mapSqrt: number[] = arr.map((function (e: number) { return Math.sqrt(e) }))
const mapSqrt1: number[] = arr.map((e) => (Math.sqrt(e)));
const mapSqrt2: number[] = arr.map(e => Math.sqrt(e));


console.log(mapSquareValues(arr), mapSqrtShort(arr));
console.log(mapSquareValuesArrow(arr));
// console.log(mapSqrt, mapSqrt1, mapSqrt2);



// # Reducing sum:
// Create a function called reduceSum that takes an array of numbers as input and returns the sum of all the numbers.
// Use the reduce method to accomplish this.

//option 1
function reduceSum(arr: number[]): number | undefined {
    try {
        return arr.reduce((a, b) => (a + b))
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

//option 2
const mapReduceShort = function (ele: number[]): number { return (ele.reduce((a, b) => (a + b))) }

//option 3
const mapReduceArrow = (ele: number[]): number => (ele.reduce((a, b) => (a + b)))

const arrReduce = [2, 3, 4];
console.log(reduceSum(arrReduce), mapReduceArrow(arrReduce), mapReduceShort(arrReduce));



// # Sorting strings:
// Create a function called sortStrings that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
// Use the sort method to accomplish this.

//option 1
function sortStrings(arr: string[]): string[] | undefined {
    try {

        return arr.sort((a, b) => a.localeCompare(b))
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//option 2
const sortStringArrow = (arr: string[]): string[] =>
    (arr.sort(function (a: string, b: string): number { return a.localeCompare(b) }))

//option 3
const sortStringShort = function (arr: string[]): string[] {
    return (arr.sort(function (a: string, b: string): number { return a.localeCompare(b) }))
}

//option 4
const sortStringShorter = arr => arr.sort((a, b) => a.localeCompare(b))


const _arrString = ['Avi', 'Cimon', 'Yos', 'Michael', 'Tal', 'Shoval', 'Shelomo', 'Beni']
console.log(sortStrings(_arrString))
console.log(sortStringArrow(_arrString))
console.log(sortStringShort(_arrString))
console.log(sortStringShorter(_arrString))




// Checking if all elements satisfy a condition:
// Create a function called allPositive that takes an array of numbers as input and returns true if all the numbers are positive, otherwise returns false.
// Use the every method to accomplish this.

//option 1
function allPositive(arr: number[]) {
    try {
        var allPositive: boolean[] = [];
        arr.forEach(a => a > 0 ? allPositive.push(true) : allPositive.push(false));
        let distinct = new Set(allPositive);
        if (distinct.size > 1) return false;
        // If Set size is 1, return the single value (true if all are positive, false otherwise)
        return distinct.has(true);
    } catch (error) {
        console.error(error);
        return false;
    }
}

//option 2
function allPositiveShort(arr: number[]): boolean {
    try {
        return arr.every(num => num > 0)
    } catch (error) {
        console.error(error);
        return false;
    }
}

//option 3
const allPositiveShorter = (arr: number[]): boolean => (arr.every(num => num > 0))


arr.push(-2)
console.log(allPositive(arr), allPositiveShort(arr), allPositiveShorter(arr))


// # Finding an element:
// Create a function called findFirstOddNumber that takes an array of numbers 
// as input and returns the first odd number found in the array. 
// If no odd number is found, return undefined.
// Use the find method to accomplish this.

//option 1
function findFirstOddNumber(arr: number[]): number | undefined {
    try {
        let odd: any = arr.find(a => a % 2 != 0);
        return odd;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//option 2
const findOdd = function (arr: number[]): number | undefined {
    let odd = arr.find((a: number) => a % 2 != 0);
    return odd;
}

//option 3
const findOddShortIndex = arr => (arr.findIndex((a) => a % 2 != 0))
const findOddShortValue = arr => (arr.find((a) => a % 2 != 0))


let odd = [12, 2, 2, 1]
console.log(findFirstOddNumber(odd), findOdd(odd), findOddShortValue(odd));
console.log(`The position of the first odd number is ${findOddShortIndex(odd)} and the value is ${findOddShortValue(odd)}`)



// # Combining arrays:
// Create a function called combineArrays that takes two arrays as input
//  and returns a new array that combines the elements of both arrays.
// Use the spread operator (...) to accomplish this.

//option 1
function combineArrays(arr: number[], arr2: number[]): number[] | undefined {
    try {
        return arr.concat(arr2);
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

//option 2
function combineArrays2(arr: number[], arr2: number[]): number[] | undefined {
    try {
        return new Array(...arr, ...arr2)
    } catch (error) {
        console.error(error)
        return undefined;
    }
}

//other option
const combineArraysShort = (arr: number[], arr2: number[]): number[] => (arr.concat(arr2));
const combineArraysShorter = (arr, arr2) => new Array(...arr, ...arr2);
const combineArraysShort2 = function (arr: number[], arr2: number[]) {
    return new Array(...arr, ...arr2);
}

let arr1 = [2, 3, 4, 5, 6, 6, 3];
let arr2 = [12, 23, 34, 54, 23];

console.log(combineArrays(arr1, arr2), combineArrays2(arr1, arr2));
console.log(combineArraysShort(arr1, arr2), combineArraysShorter(arr1, arr2));