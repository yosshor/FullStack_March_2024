import { tasksList, Task } from "../models/task";
import { User } from "../models/user";
import { handleEditHtmlTag, renderTasksList } from "../views/tasksList";
import { addTaskToUser, deleteTaskFromUser, getCurrentUserDetails } from "./addTaskToUser";



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
        const userList: Task[] | undefined = deleteTaskFromUser(id);
        if (userList) renderListOfTasks(userList);
    } catch (error) {
        console.error(error);
    }
}

export function handleEditTask(id: string): void {
    try {
        const task = tasksList.find(task => task.id === id);
        const taskDiv = document.getElementById(`a${id}`) as HTMLDivElement;
        handleEditHtmlTag(taskDiv, task!);
    } catch (error) {
        console.error(error);
    }
}


export function handleUpdateTask(id: string, event: any): void {
    try {
        const task = tasksList.find(task => task.id === id);
        // console.log(task)
        const taskDiv = document.querySelector(`#a${id}`) as HTMLDivElement;
        console.dir('taskDiv', taskDiv);
        console.log('name', event);
        event.preventDefault();
        // console.log('task', task);
        // console.log('event', event.target);
        // task.name = event.name;
        // task.description = event.desc;
        // task.done = event.done;
        // renderListOfTasks();
        return;
    } catch (error) {
        console.error(error);
    }
}