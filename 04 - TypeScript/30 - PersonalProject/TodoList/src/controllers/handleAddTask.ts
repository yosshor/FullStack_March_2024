import { tasksList, Task } from "../models/task";
import { User } from "../models/user";
import { handleEditHtmlTag, renderTasksList } from "../views/tasksList";
import { addTaskToUser, deleteOrUpdateTaskFromUser, getCurrentUserDetails, getTaskToEdit } from "./addTaskToUser";



export function handleAddTask(email: string, title: string, desc: string, author: string, expectToBeDone: Date): void | undefined {
    try {
        if (email === undefined) throw new Error("user is undefined")
        // debugger
        const userTasks: Task[] | undefined = addTaskToUser(email, title, desc, author, expectToBeDone)
        if (userTasks) renderListOfTasks(userTasks!);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function renderListOfTasks(userTasks: Task[]): void {
    //render tasks list
    const list = document.querySelector<HTMLDivElement>('#tasks-list')!;
    if (list) {
        console.log('list', list);
        renderTasksList(list, userTasks);
    }
}

export function handleDeleteTask(id: string) {
    try {
        const userList: Task[] | undefined = deleteOrUpdateTaskFromUser(id, "delete");
        if (userList) renderListOfTasks(userList);
    } catch (error) {
        console.error(error);
    }
}

export function handleEditTask(id: string): void {
    try {
        const task = getTaskToEdit(id);
        //const task = tasksList.find(task => task.id === id);
        const taskDiv = document.getElementById(`a${id}`) as HTMLDivElement;
        handleEditHtmlTag(taskDiv, task!);
    } catch (error) {
        console.error(error);
    }
}


export function handleUpdateTask(id: string, title: string, desc: string, timeToBeDone: Date, event: any): void {
    try {
        const splitId = id.split('form-')[1];
        const newTask = new Task(title, desc, "", new Date(timeToBeDone), splitId)
        const userList: Task[] | undefined = deleteOrUpdateTaskFromUser(splitId, "update", newTask)
        if (userList) renderListOfTasks(userList);

    } catch (error) {
        console.error(error);
    }
}