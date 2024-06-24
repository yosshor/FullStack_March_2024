# Exercise 1: Object Property Calculation
Task:

Create a TypeScript interface Product with properties for name (string), price (number), and quantity (number).
Write a function calculateTotalCost(product) that takes a Product object as input and returns the total cost (price * quantity) as a number.

# Exercise 2: Object String Representation
Task:

Create a TypeScript interface Book with properties for title (string), author (string), and yearPublished (number).
Write a function getBookDescription(book) that takes a Book object as input and returns a formatted string like: "Title by Author (Year Published)".


# Exercise 3: Array Filtering with Objects
Task:

Create a TypeScript array of Book objects (using the interface from Exercise 2).
Write a function getBooksByAuthor(books, author) that takes the book array and an author's name (string) as input and returns a new array containing only the books written by that author.


# Exercise 4 (Enhanced): Advanced Array Filtering and Sorting with Objects
Task:

(It is the same as Exercise 3, but with additional sorting requirements.)

Use the Book interface from Exercise 2.
Create a TypeScript array of Book objects, ensuring some books have the same author.
Write a function getBooksByAuthorSorted(books, author) that:
Takes the book array and an author's name (string) as input.
Returns a new array containing only the books written by that author.
Sorts the returned array by yearPublished in ascending order (oldest to newest).