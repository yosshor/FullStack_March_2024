

export class Task {
    id: string;
    title: string;
    desc: string;
    date: Date;
    author: string;
    expectToBeDone: Date;

    constructor(title: string, desc: string, author: string, expectToBeDone: Date) {
        this.id = crypto.randomUUID().toString();
        this.title = title;
        this.desc = desc;
        this.date = new Date(expectToBeDone);
        this.author = author;
        this.expectToBeDone = expectToBeDone;
    }
}

export const tasksList: Task[] = [];
