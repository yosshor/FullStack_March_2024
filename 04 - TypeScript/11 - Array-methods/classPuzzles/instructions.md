# Puzzle 1:
Instructions:

Create a function called filterStringsByLength(arr, minLength).
The function should accept an array of strings (arr) and a minimum length (minLength).
The function should return a new array containing only the strings from the original array whose length is greater than or equal to minLength.
Example:

const words = ["apple", "banana", "cherry", "date"];
const filteredWords = filterStringsByLength(words, 5);
console.log(filteredWords); // Output: ["apple", "banana", "cherry"];

# Puzzle 2: Filtering Words by Letter

Instructions:

Create a function called filterWordsByLetter(arr, letter).
The function should accept an array of words (arr) and a letter (letter).
The function should return a new array containing only the words from the original array that include the given letter.
Example:

JavaScript
const words = ["hello", "world", "JavaScript", "coding"];
const filteredWords = filterWordsByLetter(words, "o");
console.log(filteredWords); // Output: ["hello", "world", "coding"]


# Puzzle 3: Filtering Strings from Mixed Data

Instructions:

Create a function called filterStrings(data).
The function should accept an array (data) that can contain elements of various data types (numbers, strings, booleans, objects, etc.).
The function should return a new array containing only the elements from the original array that are numbers. the numbers should be order from the smallest to the biggest.
Example:

JavaScript
const mixedData = [1, "hello", 3.14, "world", true];
const stringsOnly = filterStrings(mixedData);
console.log(stringsOnly); // Output: [1, 3.14]

