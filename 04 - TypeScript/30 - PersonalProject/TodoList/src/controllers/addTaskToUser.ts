import { Comment } from "../models/comment";
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



export function deleteOrUpdateTaskFromUser(id: string, deleteOrUpdate: string, task?: Task, comment?: string, commentId?: string): Task[] | undefined {
    const currentUser: User | undefined = getCurrentUserDetails();
    //update all users also
    const allUsers: User[] = getAllUsers();
    const user: User | undefined = allUsers.find(user => user.email === currentUser!.email)
    const taskGlobal: number | undefined = user!.list!.findIndex(task => task.id === id);
    const currentTaskFromAllUsers: Task | undefined = user!.list.find(task => task.id === id);
    const author: string = currentUser?.firstName + " " + currentUser?.lastName
    if (!currentUser!) { throw new Error("User Not Found") }

    const userTasks: Task[] = currentUser?.list;
    const currentTaskFromCurrentUSer: Task | undefined = userTasks!.find(task => task.id === id);

    if (deleteOrUpdate === "delete") {
        //delete from currentUser task and allUsers
        const taskCurrent = userTasks!.findIndex(task => task.id === id);
        userTasks.splice(taskCurrent, 1);
        user!.list.splice(taskGlobal, 1);
        console.log('deleted from all users and currentUser')
    }
    else if (deleteOrUpdate === "update") {
        //update currentUser task and allUsers
        const currentTask = userTasks!.find(task => task.id === id);
        currentTask!.expectToBeDone! = new Date(task!.expectToBeDone);
        currentTask!.title = task!.title;
        currentTask!.desc = task!.desc;

        currentTaskFromAllUsers!.expectToBeDone! = new Date(task!.expectToBeDone);
        currentTaskFromAllUsers!.title = task!.title;
        currentTaskFromAllUsers!.desc = task!.desc;

        console.log('updated all users and currentUser')
    }
    else if (deleteOrUpdate === "addComment") {
        //for current user
        const currentTask = userTasks!.find(task => task.id === id);
        const commentIdTemp = crypto.randomUUID().toString();
        currentTask?.addComment(new Comment(comment!, author, commentIdTemp))

        //for global user
        currentTaskFromAllUsers?.addComment(new Comment(comment!, author, commentIdTemp))
    }
    else if (deleteOrUpdate === "deleteComment") {
        //for current user
        const comments: Comment[] | undefined = currentTaskFromCurrentUSer?.getComments();
        const commentsGlobal: Comment[] | undefined = currentTaskFromAllUsers?.getComments();

        // Ensure that comments exist before proceeding
        if (comments) {
            console.log("Comment IDs in Task:", comments.map(comment => comment.id));
            console.log("Looking for Comment ID:", commentId);

            //current user
            const commentIndex = comments.findIndex(comment => {
                console.log(`Comparing ${comment.id?.toString()} with ${commentId?.toString()}`);
                return comment.id?.toString() === commentId?.toString();
            });

            //for global user
            debugger

            if (commentIndex !== -1) {
                comments.splice(commentIndex, 1);
                commentsGlobal?.splice(commentIndex, 1);
                console.log(`Comment with ID ${commentId} removed.`);
                console.log(currentUser, allUsers)
            } else {
                console.log(`Comment with ID ${commentId} not found.`);
            }
        } else {
            console.log("No comments found for the current task.");
        }
    }
    localStorage.setItem("CurrentUser", JSON.stringify(currentUser))
    localStorage.setItem('AllUsers', JSON.stringify(allUsers));
    return user?.list
}

export function getTaskToEdit(id: string): Task | undefined {
    const currentUser: User | undefined = getCurrentUserDetails();
    if (!currentUser!) throw new Error("User Not Found")
    const userTasks = currentUser?.list;
    const taskCurrent = userTasks!.find(task => task.id === id);
    return taskCurrent;
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