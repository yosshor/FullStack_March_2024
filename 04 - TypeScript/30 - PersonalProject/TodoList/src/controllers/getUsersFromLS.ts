import { Email } from "../models/email";
import { User } from "../models/user";
import { getEmailInfo } from "../utils/handleUsers";

export function getAllUsers(): User[] {
    const users: User[] = [];
    try {
        const usersString = localStorage.getItem('AllUsers');
        if (usersString) {
            const usersJson = JSON.parse(usersString);
            usersJson.forEach((user: User) => {
                users.push(new User(user.firstName, user.lastName, user.email, user.password, user.id));
            });
        }
    } catch (error) {
        console.error(error);
    }
    return users;
}

export function getCurrentUser(email?: string): Email | null | undefined {
    try {
        const userString: Email = JSON.parse(localStorage.getItem('CurrentUser') as string);
        if (userString === null) {
            const users: User[] = getAllUsers();
            const user: User | undefined = users.find(user => user.email === email);
            if (!user) return null;
            localStorage.setItem('CurrentUser', JSON.stringify(user))
            return user;
        }
        return userString;
    } catch (error) {
        console.error(error);
        return null;
    }
}