import { Comment } from "../models/comment";
import { Task } from "../models/task";
import { User } from "../models/user";
import { getAllUsers, getCurrentUser } from "./getUsersFromLS";


export function getCurrentAndAllUsers(): { currentUser: User | undefined, allUsers: User[] | undefined, userGlobal: User | undefined } {
    const currentUser: User | undefined = getCurrentUserDetails();
    const allUsers: User[] = getAllUsers();
    const userGlobal: User | undefined = allUsers.find(user => user.email === currentUser!.email)

    if (!currentUser!) { throw new Error("User Not Found") }
    if (!allUsers!) { throw new Error("Users Not Found") }

    return { currentUser, allUsers, userGlobal };
}

function getTasksFromCurrentAndGlobalUsers(id: string, command: string, task?: Task, comment?: string, commentId?: string): { allUsers: User[] | undefined, currentUser: User | undefined } {
    const { currentUser, allUsers } = getCurrentAndAllUsers();

    const tasksGlobal: Task[] = allUsers!.find(user => user.email === currentUser!.email)!.list;
    const taskFromGlobalUsers: Task | undefined = tasksGlobal.find(task => task.id === id);
    const userCurrentTasks: Task[] | undefined = currentUser?.list;
    const taskFromCurrentUser: Task | undefined = userCurrentTasks!.find(task => task.id === id);
    const taskIndex: number | undefined = tasksGlobal!.findIndex(task => task.id === id);

    switchCommandOperation(command, tasksGlobal, taskIndex, userCurrentTasks, task, taskFromCurrentUser, taskFromGlobalUsers, comment, commentId);
    return { allUsers, currentUser }
}


function switchCommandOperation(command: string, tasksGlobal: Task[], taskIndex: number, userCurrentTasks: Task[] | undefined,
    task: Task | undefined, taskFromCurrentUser: Task | undefined, taskFromGlobalUsers: Task | undefined,
    comment: string | undefined, commentId: string | undefined) {
    switch (command) {

        case "delete":
            tasksGlobal.splice(taskIndex, 1);
            userCurrentTasks!.splice(taskIndex, 1);
            break;

        case "addTask":
            tasksGlobal.push(task!);
            userCurrentTasks!.push(task!);
            break;

        case "update":
            taskFromCurrentUser!.expectToBeDone! = new Date(task!.expectToBeDone);
            taskFromCurrentUser!.title = task!.title;
            taskFromCurrentUser!.desc = task!.desc;

            taskFromGlobalUsers!.expectToBeDone! = new Date(task!.expectToBeDone);
            taskFromGlobalUsers!.title = task!.title;
            taskFromGlobalUsers!.desc = task!.desc;
            break;

        case "doneTask":
            taskFromCurrentUser!.done = taskFromCurrentUser?.done === false ? true : false;
            taskFromGlobalUsers!.done = taskFromGlobalUsers?.done === false ? true : false;
            break;

        case "addComment":
            const commentIdTemp = crypto.randomUUID().toString();
            const addComment = new Comment(comment!, authorName().toString(), commentIdTemp);
            taskFromCurrentUser?.addComment(addComment);
            taskFromGlobalUsers?.addComment(addComment);
            break;

        case "deleteComment":
            const comments: Comment[] | undefined = taskFromCurrentUser?.getComments();
            const commentsGlobal: Comment[] | undefined = taskFromGlobalUsers?.getComments();
            if (comments) {
                const commentIndex = comments.findIndex(comment => {
                    console.log(`Comparing ${comment.id?.toString()} with ${commentId?.toString()}`);
                    return comment.id?.toString() === commentId?.toString();
                });
                if (commentIndex !== -1) {
                    comments.splice(commentIndex, 1);
                    commentsGlobal?.splice(commentIndex, 1);
                } else {
                    console.log(`Comment with ID ${commentId} not found.`);
                }
            }
            break;
    }
}

function deleteTask(id: string): void {
    const { allUsers, currentUser } = getTasksFromCurrentAndGlobalUsers(id, "delete");
    saveCurrentAndAllUsers(currentUser!, allUsers!);
}

function doneTask(id: string): void {
    const { allUsers, currentUser } = getTasksFromCurrentAndGlobalUsers(id, "doneTask");
    saveCurrentAndAllUsers(currentUser!, allUsers!);
}
function addTask(id: string, task: Task): void {
    const { allUsers, currentUser } = getTasksFromCurrentAndGlobalUsers(id, "addTask", task);
    saveCurrentAndAllUsers(currentUser!, allUsers!);
}

function updateTask(id: string, task: Task): void {
    const { allUsers, currentUser } = getTasksFromCurrentAndGlobalUsers(id, "update", task);
    saveCurrentAndAllUsers(currentUser!, allUsers!);
}


function addComment(id: string, comment: string): void {
    const { allUsers, currentUser } = getTasksFromCurrentAndGlobalUsers(id, "addComment", undefined, comment);
    saveCurrentAndAllUsers(currentUser!, allUsers!);
}

function deleteComment(id: string, commentId: string): void {
    const { allUsers, currentUser } = getTasksFromCurrentAndGlobalUsers(id, "deleteComment", undefined, undefined, commentId);
    saveCurrentAndAllUsers(currentUser!, allUsers!);
}

const authorName = (): string => getCurrentAndAllUsers().currentUser?.firstName + " " + getCurrentAndAllUsers().currentUser?.lastName


function saveCurrentAndAllUsers(currentUser: User, allUsers: User[]): void {
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
    localStorage.setItem('AllUsers', JSON.stringify(allUsers));
}

export function deleteOrUpdateTaskFromUser(id: string, deleteOrUpdate: string, task?: Task, comment?: string, commentId?: string): Task[] | undefined {
    switch (deleteOrUpdate) {
        case "delete":
            deleteTask(id);
            break;
        case "update":
            updateTask(id, task!)
            break;
        case "addTask":
            addTask(id, task!)
            break;
        case "doneTask":
            doneTask(id)
            break;    
        case "addComment":
            addComment(id, comment!)
            break;
        case "deleteComment":
            deleteComment(id, commentId!)
            break;

    }
    const { currentUser, allUsers, userGlobal } = getCurrentAndAllUsers();
    return currentUser?.list
}

export function getTaskToEdit(id: string): Task | undefined {
    const currentUser: User | undefined = getCurrentUserDetails();
    if (!currentUser!) throw new Error("User Not Found")
    const userTasks = currentUser?.list;
    const taskCurrent = userTasks!.find(task => task.id === id);
    return taskCurrent;
}



export function getCurrentUserDetails(email?: string): User | undefined {
    const currentUser: User | null = email !== undefined ? getCurrentUser(email) : getCurrentUser();

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