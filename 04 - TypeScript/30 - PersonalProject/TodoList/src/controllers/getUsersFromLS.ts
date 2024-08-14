import { Email } from "../models/email";
import { Task } from "../models/task";
import { User, users } from "../models/user";
import { getEmailInfo } from "../utils/handleUsers";

// export function getAllUsers(): User[] {
//     const users: User[] = [];
//     try {
//         const usersString = localStorage.getItem('AllUsers');
//         if (usersString) {
//             const usersJson = JSON.parse(usersString);
//             usersJson.forEach((user: User) => {
//                 users.push(new User(user.firstName, user.lastName, user.email, user.password, user.id));
//             });
//         }
//     } catch (error) {
//         console.error(error);
//     }
//     return users;
// }

// export function getCurrentUser(email?: string): Email | null | undefined {
//     try {
//         const userString: Email = JSON.parse(localStorage.getItem('CurrentUser') as string);
//         if (userString === null) {
//             const users: User[] = getAllUsers();
//             const user: User | undefined = users.find(user => user.email === email);
//             if (!user) return null;
//             localStorage.setItem('CurrentUser', JSON.stringify(user))
//             return user;
//         }
//         return userString;
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// }

export function getCurrentUser(email?:string): User | null {
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
    
    // Rehydrate the task list
    currentUser.list = parsedUser.list.map((taskData: any) => 
        new Task(taskData.title, taskData.desc, taskData.author, new Date(taskData.expectToBeDone), taskData.id)
    );

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
        user.list = userData.list.map((taskData: any) =>
            new Task(taskData.title, taskData.desc, taskData.author, new Date(taskData.expectToBeDone), taskData.id)
        );
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
