// # Exercise 1: Object Property Calculation
// Task:
// option 1
function calculateTotalCost1() {
    return this.price * this.quantity;
}
// option 2
var calculateTotalCost = function () { return this.price * this.quantity; };
var product1 = {
    name: 'Chair',
    price: 23.5,
    quantity: 3,
    TotalCost: calculateTotalCost
};
console.log(product1.TotalCost());
function getBookDescription() {
    try {
        return "Title by Author " + this.yearPublished;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//another option
var getBookDescriptionShort = function () { return "Title by Author " + this.yearPublished; };
// # Exercise 3: Array Filtering with Objects
// Task:
// Create a TypeScript array of Book objects (using the interface from Exercise 2).
// Write a function getBooksByAuthor(books, author) that takes the book array and
//  an author's name (string) as input and returns a new array containing only the 
// books written by that author.
function getBookByAuthor(books, author) {
    try {
        return books.filter(function (book) { return book.author === author; });
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//another option
var getBookByAuthorShorter = function (books, author) {
    return books.filter(function (ele) { return ele.author === author; });
};
var getBookByAuthorShort = function (books, author) {
    return books.filter(function (ele) { return ele.author === author; });
};
var classicNovel = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
    description: getBookDescription
};
var sciFiBook = {
    title: "Dune",
    author: "Frank Herbert",
    yearPublished: 1965,
    description: getBookDescription
};
var modernFiction = {
    title: "The Road",
    author: "Cormac McCarthy",
    yearPublished: 2006,
    description: getBookDescription
};
var nonFictionBook = {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    yearPublished: 2011,
    description: getBookDescription
};
var fantasyBook = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    yearPublished: 1997,
    description: getBookDescription
};
var fantasyBook2 = {
    title: "Sorcerer's Stone",
    author: "J.K. Rowling",
    yearPublished: 2001,
    description: getBookDescription
};
var fantasyBook3 = {
    title: "Humankind",
    author: "J.K. Rowling",
    yearPublished: 1891,
    description: getBookDescription
};
var nonFictionBookNew = {
    title: "Humankind",
    author: "Yuval Noah Harari",
    yearPublished: 2008,
    description: getBookDescription
};
var books = new Array(classicNovel, sciFiBook, modernFiction, nonFictionBook, fantasyBook, fantasyBook2, nonFictionBookNew, fantasyBook3);
var author = "Yuval Noah Harari";
console.log("get the results from books object with the author " + author + " is:");
console.log(getBookByAuthor(books, author));
console.log(nonFictionBook.description());
// # Exercise 4 (Enhanced): Advanced Array Filtering and Sorting with Objects
// Task:
// (It is the same as Exercise 3, but with additional sorting requirements.)
// Use the Book interface from Exercise 2.
// Create a TypeScript array of Book objects, ensuring some books have the same author.
// Write a function getBooksByAuthorSorted(books, author) that:
// Takes the book array and an author's name (string) as input.
// Returns a new array containing only the books written by that author.
// Sorts the returned array by yearPublished in ascending order (oldest to newest).
function getBooksByAuthorSorted(books, author) {
    try {
        var filtered = books.filter(function (a) { return a.author === author; });
        filtered.sort(function (a, b) { return (a.yearPublished - b.yearPublished); });
        return filtered;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//another option
var getBooksByAuthorSortedShort = function (books, author) {
    return books.filter(function (a) { return a.author === author; }).sort(function (a, b) { return (a.yearPublished - b.yearPublished); });
};
var getBooksByAuthorSortedShorter = function (books, author) {
    return (books.filter(function (_a) {
        var bookAuthor = _a.author;
        return bookAuthor === author;
    })
        .sort(function (_a, _b) {
        var yearA = _a.yearPublished;
        var yearB = _b.yearPublished;
        return yearA - yearB;
    }));
};
var author = "J.K. Rowling";
console.log("get the results from books object with the author " + author + " is:");
console.log(getBooksByAuthorSorted(books, author));
console.log(getBooksByAuthorSortedShort(books, author));
console.log(getBooksByAuthorSortedShorter(books, author));
