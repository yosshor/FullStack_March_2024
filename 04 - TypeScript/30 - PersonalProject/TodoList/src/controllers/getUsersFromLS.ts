import { User } from "../models/user";

export function getAllUsers(): User[] {
    const users: User[] = [];
    try {
        const usersString = localStorage.getItem('AllUsers');
        if (usersString) {
            const usersJson = JSON.parse(usersString);
            usersJson.forEach((user: User) => {
                users.push(new User(user.firstName, user.lastName, user.email, user.password));
            });
        }
    } catch (error) {
        console.error(error);
    }
    return users;
}

export function getCurrentUser(): string | undefined {
    try {
        const userString = localStorage.getItem('CurrentUser');
        if (userString) {
            return userString;
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
}