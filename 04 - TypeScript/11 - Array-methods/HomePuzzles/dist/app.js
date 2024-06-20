// # Filtering even numbers:
// Create a function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.
// Use the filter method to accomplish this.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//option 1
var arr = [2, 3, 4, 5, 5, 67, 7, 5, 5, 7, 8, 12];
function filterEvenNumbers(arr) {
    try {
        return arr.filter(function (elm) { return elm % 2 == 0; });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//option 2
var filterEvenNumArrow = function (_arr) { return _arr.filter(function (element) { return element % 2 == 0; }); };
// option 3
var filterEven = [1, 2, 3, 4, 5, 6, 7, 9].filter(function (element) { return element % 2 == 0; });
console.log(filterEvenNumbers(arr));
console.log(filterEvenNumArrow(arr));
console.log(filterEven);
// # Mapping square values:
// Create a function called mapSquareValues that takes an array of numbers as input and returns a new array with each number squared.
// Use the map method to accomplish this.
//Mapping function 
//option 1
function mapSquareValues(arr) {
    try {
        var values = arr.map(function (element) { return Math.sqrt(element); });
        return values;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//option 2
var mapSquareValuesArrow = function (_arr) { return (arr.map(function (e) { return Math.sqrt(e); })); };
//option 3
var mapSqrtShort = function (ele) { return arr.map((function (e) { return Math.sqrt(e); })); };
var mapSqrt = arr.map((function (e) { return Math.sqrt(e); }));
var mapSqrt1 = arr.map(function (e) { return (Math.sqrt(e)); });
var mapSqrt2 = arr.map(function (e) { return Math.sqrt(e); });
console.log(mapSquareValues(arr), mapSqrtShort(arr));
console.log(mapSquareValuesArrow(arr));
// console.log(mapSqrt, mapSqrt1, mapSqrt2);
// # Reducing sum:
// Create a function called reduceSum that takes an array of numbers as input and returns the sum of all the numbers.
// Use the reduce method to accomplish this.
//option 1
function reduceSum(arr) {
    try {
        return arr.reduce(function (a, b) { return (a + b); });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//option 2
var mapReduceShort = function (ele) { return (ele.reduce(function (a, b) { return (a + b); })); };
//option 3
var mapReduceArrow = function (ele) { return (ele.reduce(function (a, b) { return (a + b); })); };
var arrReduce = [2, 3, 4];
console.log(reduceSum(arrReduce), mapReduceArrow(arrReduce), mapReduceShort(arrReduce));
// # Sorting strings:
// Create a function called sortStrings that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order.
// Use the sort method to accomplish this.
//option 1
function sortStrings(arr) {
    try {
        return arr.sort(function (a, b) { return a.localeCompare(b); });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//option 2
var sortStringArrow = function (arr) {
    return (arr.sort(function (a, b) { return a.localeCompare(b); }));
};
//option 3
var sortStringShort = function (arr) {
    return (arr.sort(function (a, b) { return a.localeCompare(b); }));
};
//option 4
var sortStringShorter = function (arr) { return arr.sort(function (a, b) { return a.localeCompare(b); }); };
var _arrString = ['Avi', 'Cimon', 'Yos', 'Michael', 'Tal', 'Shoval', 'Shelomo', 'Beni'];
console.log(sortStrings(_arrString));
console.log(sortStringArrow(_arrString));
console.log(sortStringShort(_arrString));
console.log(sortStringShorter(_arrString));
// Checking if all elements satisfy a condition:
// Create a function called allPositive that takes an array of numbers as input and returns true if all the numbers are positive, otherwise returns false.
// Use the every method to accomplish this.
//option 1
function allPositive(arr) {
    try {
        var allPositive = [];
        arr.forEach(function (a) { return a > 0 ? allPositive.push(true) : allPositive.push(false); });
        var distinct = new Set(allPositive);
        if (distinct.size > 1)
            return false;
        // If Set size is 1, return the single value (true if all are positive, false otherwise)
        return distinct.has(true);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
//option 2
function allPositiveShort(arr) {
    try {
        return arr.every(function (num) { return num > 0; });
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
//option 3
var allPositiveShorter = function (arr) { return (arr.every(function (num) { return num > 0; })); };
arr.push(-2);
console.log(allPositive(arr), allPositiveShort(arr), allPositiveShorter(arr));
// # Finding an element:
// Create a function called findFirstOddNumber that takes an array of numbers 
// as input and returns the first odd number found in the array. 
// If no odd number is found, return undefined.
// Use the find method to accomplish this.
//option 1
function findFirstOddNumber(arr) {
    try {
        var odd_1 = arr.find(function (a) { return a % 2 != 0; });
        return odd_1;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//option 2
var findOdd = function (arr) {
    var odd = arr.find(function (a) { return a % 2 != 0; });
    return odd;
};
//option 3
var findOddShortIndex = function (arr) { return (arr.findIndex(function (a) { return a % 2 != 0; })); };
var findOddShortValue = function (arr) { return (arr.find(function (a) { return a % 2 != 0; })); };
var odd = [12, 2, 2, 1];
console.log(findFirstOddNumber(odd), findOdd(odd), findOddShortValue(odd));
console.log("The position of the first odd number is " + findOddShortIndex(odd) + " and the value is " + findOddShortValue(odd));
// # Combining arrays:
// Create a function called combineArrays that takes two arrays as input
//  and returns a new array that combines the elements of both arrays.
// Use the spread operator (...) to accomplish this.
//option 1
function combineArrays(arr, arr2) {
    try {
        return arr.concat(arr2);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//option 2
function combineArrays2(arr, arr2) {
    try {
        return new (Array.bind.apply(Array, __spreadArrays([void 0], arr, arr2)))();
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//other option
var combineArraysShort = function (arr, arr2) { return (arr.concat(arr2)); };
var combineArraysShorter = function (arr, arr2) { return new (Array.bind.apply(Array, __spreadArrays([void 0], arr, arr2)))(); };
var combineArraysShort2 = function (arr, arr2) {
    return new (Array.bind.apply(Array, __spreadArrays([void 0], arr, arr2)))();
};
var arr1 = [2, 3, 4, 5, 6, 6, 3];
var arr2 = [12, 23, 34, 54, 23];
console.log(combineArrays(arr1, arr2), combineArrays2(arr1, arr2));
console.log(combineArraysShort(arr1, arr2), combineArraysShorter(arr1, arr2));
