// catch only one Element. I uses scss selector
var myH1 = document.querySelector('#myH1');
console.dir(myH1);
if (myH1) {
    myH1.innerText = "Hello World!";
    myH1.style.color = "blue";
}
//cache some elements
var ps = document.querySelectorAll('p');
console.dir(ps);
//loop through the elements
if (ps) {
    ps.forEach(function (p) {
        p.style.color = "green";
    });
}
var bigs = document.querySelectorAll('.big');
console.dir(bigs);
if (bigs) {
    bigs.forEach(function (big) {
        big.style.fontSize = "2rem";
    });
}
var Twilight = {
    title: "Twilight",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription: getBookDescription,
    coverImg: "https://prodimage.images-bn.com/pimages/9780316327336_p0_v1_s1200x630.jpg"
};
var NewMoon = {
    title: "New Moon",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription: getBookDescription,
    coverImg: "https://m.media-amazon.com/images/I/51+vlADseTL._AC_UF1000,1000_QL80_.jpg"
};
var Eclipse = {
    title: "Eclipse",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription: getBookDescription,
    coverImg: "https://m.media-amazon.com/images/I/71eFFNULRHL._AC_UF1000,1000_QL80_.jpg"
};
var BreakingDawn = {
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription: getBookDescription,
    coverImg: "https://prodimage.images-bn.com/pimages/9780316328326_p0_v1_s1200x630.jpg"
};
var theGreatGatsby = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    getDescription: getBookDescription,
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"
};
var theLordOfTheRings = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    yearPublished: 1930,
    getDescription: getBookDescription,
    coverImg: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
};
function getBookDescription(arr) {
    try {
        var Description = this.title + " by " + this.author + " (" + this.yearPublished + ")";
        return Description;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
//Model for the books
var books = [
    Twilight,
    NewMoon,
    Eclipse,
    BreakingDawn,
    theGreatGatsby,
    theLordOfTheRings
];
var booksDiv = document.querySelector('#books');
//controller for the books
//function that writes the books to the DOM
function writeBooksToDOM(books, element) {
    try {
        if (!element)
            throw new Error("Element not found");
        if (!books)
            throw new Error("No books found");
        var html_1 = "";
        books.forEach(function (book) {
            var htmlBook = bookCard(book);
            if (htmlBook)
                html_1 += htmlBook;
        });
        element.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
writeBooksToDOM(books, booksDiv);
function bookCard(book) {
    try {
        return "<div class=\"book\">\n        <div class=\"book__cover\" style=\"background-image:url(" + book.coverImg + ")\">\n        </div>\n        <div class=\"book__info\">\n        <h2>" + book.title + "</h2>\n        <p>by " + book.author + " (" + book.yearPublished + ")</p>\n        </div>\n        </div>";
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
