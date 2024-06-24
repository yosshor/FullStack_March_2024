// # Exercise 1: Object Property Calculation
// Task:

// Create a TypeScript interface Product with properties 
// for name (string), price (number), and quantity (number).
// Write a function calculateTotalCost(product) that takes a
//  Product object as input and returns the total cost (price * quantity) as a number.

interface Product {
    name: string;
    price: number;
    quantity: number;
    TotalCost: () => number;
}

// option 1
function calculateTotalCost1(this: Product): number {
    return this.price * this.quantity;
}

// option 2
const calculateTotalCost = function (): number { return this.price! * this.quantity! };

const product1: Product = {
    name: 'Chair',
    price: 23.5,
    quantity: 3,
    TotalCost: calculateTotalCost
}



console.log(product1.TotalCost())


// # Exercise 2: Object String Representation
// Task:

// Create a TypeScript interface Book with properties for title (string),
//  author (string), and yearPublished (number).
// Write a function getBookDescription(book) that takes a Book object as
//  input and returns a formatted string like: "Title by Author (Year Published)".

interface Book {
    title: string;
    author: string;
    yearPublished: number;
    description: () => string | undefined;
}

function getBookDescription(): string | undefined {
    try {
        return `Title by Author ${this.yearPublished}`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//another option
const getBookDescriptionShort = function (): string | undefined { return `Title by Author ${this.yearPublished}`; }

// # Exercise 3: Array Filtering with Objects
// Task:
// Create a TypeScript array of Book objects (using the interface from Exercise 2).
// Write a function getBooksByAuthor(books, author) that takes the book array and
//  an author's name (string) as input and returns a new array containing only the 
// books written by that author.

function getBookByAuthor(books: Book[], author: string): Book[] | undefined {
    try {
        return books.filter(book => book.author === author);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//another option
const getBookByAuthorShorter = (books: Book[], author: string): Book[] =>
    books.filter(ele => ele.author === author);

const getBookByAuthorShort = function (books: Book[], author: string): Book[] {
    return books.filter(ele => ele.author === author);
}


const classicNovel: Book = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
    description: getBookDescription,
};
const sciFiBook: Book = {
    title: "Dune",
    author: "Frank Herbert",
    yearPublished: 1965,
    description: getBookDescription,
};
const modernFiction: Book = {
    title: "The Road",
    author: "Cormac McCarthy",
    yearPublished: 2006,
    description: getBookDescription,
};
const nonFictionBook: Book = {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    yearPublished: 2011,
    description: getBookDescription,
};
const fantasyBook: Book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    yearPublished: 1997,
    description: getBookDescription,
};
const fantasyBook2: Book = {
    title: "Sorcerer's Stone",
    author: "J.K. Rowling",
    yearPublished: 2001,
    description: getBookDescription,
};
const fantasyBook3: Book = {
    title: "Humankind",
    author: "J.K. Rowling",
    yearPublished: 1891,
    description: getBookDescription,
};
const nonFictionBookNew: Book = {
    title: "Humankind",
    author: "Yuval Noah Harari",
    yearPublished: 2008,
    description: getBookDescription,
};


const books = new Array(classicNovel, sciFiBook, modernFiction, nonFictionBook,
    fantasyBook, fantasyBook2, nonFictionBookNew, fantasyBook3)


var author = "Yuval Noah Harari";

console.log(`get the results from books object with the author ${author} is:`)
console.log(getBookByAuthor(books, author))

console.log(nonFictionBook.description())


// # Exercise 4 (Enhanced): Advanced Array Filtering and Sorting with Objects
// Task:
// (It is the same as Exercise 3, but with additional sorting requirements.)
// Use the Book interface from Exercise 2.
// Create a TypeScript array of Book objects, ensuring some books have the same author.
// Write a function getBooksByAuthorSorted(books, author) that:
// Takes the book array and an author's name (string) as input.
// Returns a new array containing only the books written by that author.
// Sorts the returned array by yearPublished in ascending order (oldest to newest).

function getBooksByAuthorSorted(books: Book[], author: string): Book[] | undefined {
    try {
        var filtered = books.filter(a => a.author === author);
        filtered.sort((a, b) => (a.yearPublished - b.yearPublished))
        return filtered;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

//another option
const getBooksByAuthorSortedShort = function (books: Book[], author: string): Book[] {
    return books.filter(a => a.author === author).sort((a, b) => (a.yearPublished - b.yearPublished))
}

const getBooksByAuthorSortedShorter = (books: Book[], author: string): Book[] =>
(books.filter(({ author: bookAuthor }) => bookAuthor === author)
    .sort(({ yearPublished: yearA }, { yearPublished: yearB }) => yearA - yearB))


var author = "J.K. Rowling";

console.log(`get the results from books object with the author ${author} is:`)
console.log(getBooksByAuthorSorted(books, author))
console.log(getBooksByAuthorSortedShort(books, author))
console.log(getBooksByAuthorSortedShorter(books, author))