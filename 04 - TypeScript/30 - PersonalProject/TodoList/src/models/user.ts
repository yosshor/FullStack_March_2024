import { getAllUsers } from '../controllers/getUsersFromLS.ts';
import { Task } from './task.ts'

export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    list: Task[];


    constructor(firstName: string, lastName: string, email: string, password: string, id?: string) {
        this.id = id ?? crypto.randomUUID().toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.list = [];
    }
    addToList(item: Task): void {
        this.list.push(item);
    }

    getAllTasks(): Task[] {
        return this.list;
    }
    
    addCommentToTask(taskId: string, comment: Comment) {
        const task = this.list.find(t => t.id === taskId);
        if (task) {
            task.addComment(comment);
        } else {
            console.log(`Task with id ${taskId} not found.`);
        }
    }

    getAllComments(): Comment[] {
        return this.list.flatMap(task => task.getComments());
    }
}

export let users: User[] = getAllUsers();