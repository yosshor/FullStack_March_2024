import { Task } from "../models/task";
import { User } from "../models/user";



export function addTaskToUser(email: string, title: string, desc: string, author: string, expectToBeDone: Date): void {
    const usersString = localStorage.getItem('AllUsers');
    if (!usersString) {
        console.error("No users found in localStorage.");
        return;
    }

    // Parse users array
    const users: User[] = JSON.parse(usersString);

    // Find the user by email
    const user = users.find(user => user.email === email);
    if (!(user instanceof User)) console.error("User not instance of users")
    if (!user) {
        console.error("User not found.");
        return;
    }

    // Add the new task to the user's list
    const task = new Task(title, desc, author, expectToBeDone);
    user.list.push(task);

    // Save the updated users array back to localStorage
    localStorage.setItem('AllUsers', JSON.stringify(users));
}
