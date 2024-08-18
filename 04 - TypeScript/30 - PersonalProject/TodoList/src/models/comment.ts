export class Comment {
    id: string;
    content: string;
    author: string;
    date: Date;

    constructor(content: string, author: string, id: string, date?: Date) {
        this.content = content;
        this.author = author;
        this.id = id;
        this.date = date ?? new Date()

    }
}