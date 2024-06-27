// catch only one Element. I uses scss selector
const myH1 = document.querySelector('#myH1') as HTMLDivElement;
console.dir(myH1);
if (myH1) {
    myH1.innerText = "Hello World!";
    myH1.style.color = "blue";
}

//cache some elements
const ps = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
console.dir(ps);

//loop through the elements
if (ps) {
    ps.forEach(p => {
        p.style.color = "green";
    });

}

const bigs = document.querySelectorAll('.big') as NodeListOf<HTMLParagraphElement>;
console.dir(bigs);

if (bigs) {
    bigs.forEach(big => {
        big.style.fontSize = "2rem";
    });
}

// Creating elements on the DOM

//traditional way to create elements on the DOM:
// https://g.co/gemini/share/244383fbe8e5



//schema for a book object
interface Book {
    title: string;
    author: string;
    yearPublished: number;
    getDescription: (arr: Book[]) => string | undefined;
    coverImg: string;

}

const Twilight: Book = {
    title: "Twilight",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription: getBookDescription,
    coverImg: "https://prodimage.images-bn.com/pimages/9780316327336_p0_v1_s1200x630.jpg"

};

const NewMoon: Book = {
    title: "New Moon",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription: getBookDescription,
    coverImg: "https://m.media-amazon.com/images/I/51+vlADseTL._AC_UF1000,1000_QL80_.jpg"
};

const Eclipse: Book = {
    title: "Eclipse",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription: getBookDescription,
    coverImg: "https://m.media-amazon.com/images/I/71eFFNULRHL._AC_UF1000,1000_QL80_.jpg"

};

const BreakingDawn: Book = {
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription: getBookDescription,
    coverImg: "https://prodimage.images-bn.com/pimages/9780316328326_p0_v1_s1200x630.jpg"

};

const theGreatGatsby: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    getDescription: getBookDescription,
    coverImg: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"


};

const theLordOfTheRings: Book = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    yearPublished: 1930,
    getDescription: getBookDescription,
    coverImg: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"

};

function getBookDescription(arr: Book[]): any | undefined {
    try {
        let Description = this.title + " by " + this.author + " (" + this.yearPublished + ")";
        return Description
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}

//Model for the books

const books = [
    Twilight,
    NewMoon,
    Eclipse,
    BreakingDawn,
    theGreatGatsby,
    theLordOfTheRings
];

const booksDiv = document.querySelector('#books') as HTMLDivElement;


//controller for the books
//function that writes the books to the DOM

function writeBooksToDOM(books: Book[], element: HTMLDivElement) {
    try {
        if (!element) throw new Error("Element not found");
        if (!books) throw new Error("No books found");

        let html:string = ``;
        books.forEach(book => {
            const htmlBook = bookCard(book);
           if(htmlBook) html += htmlBook;
        });

        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

writeBooksToDOM(books, booksDiv);

function bookCard(book: Book): string | undefined {
    try {
        return `<div class="book">
        <div class="book__cover" style="background-image:url(${book.coverImg})">
        </div>
        <div class="book__info">
        <h2>${book.title}</h2>
        <p>by ${book.author} (${book.yearPublished})</p>
        </div>
        </div>`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
