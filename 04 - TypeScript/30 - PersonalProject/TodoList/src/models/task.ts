
import { Comment } from "./comment";

export class Task {
    id: string;
    title: string;
    desc: string;
    date: Date;
    author: string;
    expectToBeDone: Date;
    comments: Comment[];
    done: boolean;

    constructor(title: string, desc: string, author: string, expectToBeDone: Date, id?: string, done?: boolean) {
        this.id = id ?? crypto.randomUUID().toString();
        this.title = title;
        this.desc = desc;
        this.date = new Date();
        this.author = author;
        this.expectToBeDone = new Date(expectToBeDone);
        this.comments = [];
        this.done = done ?? false;
    }

    addComment(comment: Comment) {
        this.comments.push(comment);
    }

    getComments(): Comment[] {
        return this.comments;
    }

}

