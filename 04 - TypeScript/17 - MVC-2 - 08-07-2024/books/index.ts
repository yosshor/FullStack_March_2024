class Book {
    title: string;
    author: string;
    id: string;
    readerId: string = '';

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        this.id = crypto.randomUUID();
    }

    addReader(reader: Reader) {
        this.readerId = reader.id;
    }
    removeReader() {
        this.readerId = '';
    }

}

class Reader {
    name: string;
    id: string;
    books: Book[] = [];

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
    }

    
}