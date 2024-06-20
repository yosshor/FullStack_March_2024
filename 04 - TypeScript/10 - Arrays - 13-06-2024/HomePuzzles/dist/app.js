// # Array Reversal:
// Write a function reverseArray<T>(arr: T[]): T[] that takes an array of any type and returns a new array with the elements in reversed order.
// Example: reverseArray([1, 2, 3]) should return [3, 2, 1].
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function reverseArray(arr) {
    try {
        var temp = [];
        // debugger
        for (var i = arr.length - 1; i >= 0; i--) {
            temp.push(arr[i]);
        }
        return temp;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(reverseArray([1, 3, 2, true, "hi", false]));
// # Array Summation:
// Write a function sumArray(arr: number[]): number that takes an array of numbers and returns their sum.
function sumArray(arr) {
    try {
        var sum = 0;
        arr.forEach(function (element) {
            sum += element;
        });
        return sum;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(sumArray([1, 2, 3, 4]));
// # Maximum Element:
// Write a function findMax(arr: number[]): number that takes an array of numbers and returns the largest number.
// Handle the case of an empty array appropriately (e.g., return undefined or throw an error).
function findMax(arr) {
    try {
        if (arr.length == 0) {
            throw new Error("You must insert list of numbers");
        }
        // option 1
        var max = Math.max.apply(Math, arr);
        // option 2
        var tempMax = 0;
        arr.forEach(function (element) {
            if (element > tempMax) {
                tempMax = element;
            }
        });
        return [tempMax, max];
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(findMax([2, 145, 2, 25, 23]));
// # Filtering Even Numbers:
// Write a function filterEven(arr: number[]): number[] that takes an array of numbers and returns a new array containing only the even numbers.
function filterEven(arr) {
    try {
        if (arr.length === 0)
            throw new Error("You Must Insert Some Number In Your List");
        //option 1
        var even = arr.filter(function (element) { return element % 2 == 0; });
        //option 2
        var tempEven = [];
        arr.forEach(function (element) {
            if (element % 2 === 0)
                tempEven.push(element);
        });
        return [even, tempEven];
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(filterEven([12, 23, 44, 54, 66, 3]));
// # Unique Values:
// Write a function unique(arr: SomeType[]): SomeType[] that takes an array of any type and returns a new array with only unique elements.
function unique(arr) {
    try {
        if (arr.length === 0)
            throw new Error("Please insert values into your array");
        var unique = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (!unique.includes(item)) {
                unique.push(item);
            }
        }
        return unique;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(unique([3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 2, 23, 5, 4, 3, 4, 4, 4]));
// # Frequency Counter:
// Print the elements of an array in the decreasing frequency if 2 numbers have the same frequency then print the one which came first
// Examples:  
// Input:  arr[] = [2, 2,2, 8, 5, 6, 8, 8, 8]
// Output: arr[] = [8, 2, 5,  6] // 8 came 4 times 2 came 2 times 5 came 1 time 6 came 1 time
// Hint: write another function that counts instances of a number in an array, and use it.
function frequency(arr) {
    try {
        if (arr.length == 0)
            throw new Error("Please insert valid array");
        var _arr = [];
        arr.forEach(function (element) {
            // console.log(_arr, element)
            _arr.push([element, counter(element, arr)]);
        });
        console.log(_arr);
        console.log(__spreadArrays(new Set(_arr)));
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function distinctArray(arr) {
    try {
        var temp = [];
        arr.forEach(function (item, i) {
            // debugger
            console.log(temp.includes(item));
            temp.forEach(function (i) {
                if (i == item) {
                    temp.push(item);
                }
            }
            // console.log(item)
            , 
            // console.log(item)
            console.log(temp));
        });
    }
    catch (error) {
    }
}
function counter(num, arr) {
    try {
        if (num === undefined || arr.length == 0)
            throw new Error("Please insert valid arguments");
        var count = 0;
        arr.forEach(function (element) {
            if (num === element) {
                count += 1;
            }
        });
        return count;
    }
    catch (error) {
        console.log(error);
        return 0;
    }
}
// console.log(counter(8,[2, 2, 2, 8, 5, 6, 8, 8, 8]))
// console.log(frequency([2, 2,2, 8, 5, 6, 8, 8, 8]))
var _arr = [
    [2, 3],
    [8, 4],
    [5, 1],
    [6, 1],
    [2, 3],
    [6, 1] // duplicate
];
console.log(distinctArray(_arr));
