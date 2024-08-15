export class Comment {
    id: string;
    content: string;
    author: string;
    date: Date;

    constructor(content: string, author: string, date?: Date, id?: string) {
        this.content = content;
        this.author = author;
        this.date = date ?? new Date()
        this.id = id ?? crypto.randomUUID().toString();

    }
}