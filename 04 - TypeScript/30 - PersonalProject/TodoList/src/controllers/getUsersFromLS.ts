import { Task } from "../models/task";
import { Comment } from "../models/comment";
import { User } from "../models/user";


export function getCurrentUser(email?: string): User | null {
    const currentUserData = localStorage.getItem('CurrentUser');

    if (!currentUserData || currentUserData === "null") {
        const users: User[] = getAllUsers();
        const user: User | undefined = users.find(user => user.email === email);
        if (!user) return null;
        localStorage.setItem('CurrentUser', JSON.stringify(user))
        return user;
    }

    // Parse and rehydrate the current user
    const parsedUser = JSON.parse(currentUserData);

    // Reinstantiate as a User
    const currentUser = new User(parsedUser.firstName, parsedUser.lastName, parsedUser.email, parsedUser.password, parsedUser.id);

    // Rehydrate the task list and comments
    currentUser.list = parsedUser.list.map((taskData: any) => {
        const task = new Task(taskData.title, taskData.desc, taskData.author, new Date(taskData.expectToBeDone), taskData.id);

        // Rehydrate the comments array for each task
        task.comments = taskData.comments.map((commentData: any) =>
            new Comment(commentData.content, commentData.author, commentData.id, commentData.date)
        );

        return task;
    });

    return currentUser;
}


export function getAllUsers(): User[] {
    const usersString = localStorage.getItem('AllUsers');
    if (!usersString) return [];

    // Parse and rehydrate the users
    const parsedUsers = JSON.parse(usersString);

    // Reconstruct the User and Task objects
    return parsedUsers.map((userData: any) => {
        const user = new User(userData.firstName, userData.lastName, userData.email, userData.password, userData.id);
        // Rehydrate tasks and their comments
        user.list = userData.list.map((taskData: any) => {
            const task = new Task(taskData.title, taskData.desc, taskData.author, new Date(taskData.expectToBeDone), taskData.id);

            // Rehydrate comments
            task.comments = taskData.comments.map((commentData: any) =>
                new Comment(commentData.content, commentData.author, commentData.id, commentData.date)
            );

            return task;
        });

        return user;
    });
}

export function addUser(firstName: string, lastName: string, email: string, password: string): void {
    const usersString = localStorage.getItem('AllUsers');
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    // Create a new user and add to users array
    const user = new User(firstName, lastName, email, password);
    users.push(user);

    // Store the updated users array in localStorage
    localStorage.setItem('AllUsers', JSON.stringify(users));
}
