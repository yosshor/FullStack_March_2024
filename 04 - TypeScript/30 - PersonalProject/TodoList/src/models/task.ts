

export class Task {
    id: string;
    title: string;
    desc: string;
    date: Date;
    author: string;
    expectToBeDone: Date;

    constructor(title: string, desc: string, author: string, expectToBeDone: Date, id?: string) {
        this.id = id ?? crypto.randomUUID().toString();
        this.title = title;
        this.desc = desc;
        this.date = new Date();
        this.author = author;
        this.expectToBeDone = new Date(expectToBeDone);
    }
}

export const tasksList: Task[] = [];
