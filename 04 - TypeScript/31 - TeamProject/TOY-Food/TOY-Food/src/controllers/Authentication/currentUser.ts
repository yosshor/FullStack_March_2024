import { Item } from "../../models/Item";
import { User } from "../../models/User";


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
    const currentUser = new User(parsedUser.userType, parsedUser.email, parsedUser.password,
        parsedUser.firstName, parsedUser.lastName, parsedUser.phoneNumber, parsedUser.address);
    return currentUser;
}


export function getAllUsers(): User[] {
    const usersString = localStorage.getItem('AllUsers');
    if (!usersString) return [];

    // Parse and rehydrate the users
    const parsedUsers = JSON.parse(usersString);

    // Reconstruct the User and Task objects
    return parsedUsers.map((userData: any) => {
        const user = new User(userData.userType, userData.email, userData.password,
            userData.firstName, userData.lastName, userData.phoneNumber, userData.address);
        return user;
    });
}

