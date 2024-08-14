import { Task } from "../models/task";
import { User, users } from "../models/user";
import { getAllUsers, getCurrentUser } from "./getUsersFromLS";



export function addTaskToUser(email: string, title: string, desc: string, author: string, expectToBeDone: Date): Task[] | undefined {
    const currentUser = getCurrentUserDetails(email);
    if (!currentUser!) throw new Error("User Not Found")
    // Add the new task to the user's list and update CurrentUser
    const task = new Task(title, desc, author, expectToBeDone);
    currentUser!.list.push(task);
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser))

    //update all users also
    const allUsers = getAllUsers();
    const user = allUsers.find(user => user.email === email)
    user?.list.push(task);

    localStorage.setItem('AllUsers', JSON.stringify(allUsers));
    return user?.list
}

export function deleteTaskFromUser(id: string): Task[] | undefined {
    const currentUser: User | undefined = getCurrentUserDetails();
    if (!currentUser!) throw new Error("User Not Found")
    const userTasks = currentUser?.list;
    const taskCurrent = userTasks!.findIndex(task => task.id === id);
    console.log('task num', taskCurrent);
    userTasks.splice(taskCurrent, 1);
    console.log('deleted')

    localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
    // debugger
    //update all users also
    const allUsers: User[] = getAllUsers();
    const user = allUsers.find(user => user.email === currentUser.email)
    const taskGlobal = user!.list!.findIndex(task => task.id === id);
    console.log('task num', taskGlobal);
    user!.list.splice(taskGlobal, 1);
    console.log('deleted from all users')

    localStorage.setItem('AllUsers', JSON.stringify(allUsers));
    return user?.list
}



export function getCurrentUserDetails(email?: string): User | undefined {
    const currentUser = email !== undefined ? getCurrentUser(email) : getCurrentUser();

    if (!currentUser) {
        console.error("No users found in localStorage.");
        return;
    }

    if (!(currentUser instanceof User)) console.error("User not instance of users")
    if (!currentUser) {
        console.error("User not found.");
        return;
    }
    return currentUser;
}

export function getAllUserTasks(email?: string): Task[] | undefined {
    const user: User | undefined = email !== undefined ? getCurrentUserDetails(email) : getCurrentUserDetails();
    if (user) return user!.list
    else return [];
}