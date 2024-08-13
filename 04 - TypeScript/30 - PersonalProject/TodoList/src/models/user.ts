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
}

export let users: User[] = getAllUsers();