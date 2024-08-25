import { Task } from "../models/task";
import { renderHeaderUser } from "../views/header/header";
import { handleEditHtmlTag, renderTasksList } from "../views/render-tasks/tasksList";
import { deleteOrUpdateTaskFromUser, getCurrentUserDetails, getTaskToEdit } from "./addTaskToUser";
import { showPopUpFinishYourTask } from "./popup";



/**
 * Handles the addition of a new task to the user's task list.
 *
 * @param {string} id - The unique identifier of the user.
 * @param {string} title - The title of the task to be added.
 * @param {string} desc - The description of the task to be added.
 * @param {string} author - The author of the task to be added.
 * @param {Date} expectToBeDone - The expected completion date of the task.
 * @return {void | undefined} Returns undefined if an error occurs, otherwise returns void.
 */
export function handleAddTask(id: string, title: string, desc: string, author: string, expectToBeDone: Date): void | undefined {
    try {
        const command = "addTask"
        handleTasksOperation(title, desc, author, expectToBeDone, id, command);
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function handleTasksOperation(title: string, desc: string, author: string, expectToBeDone: Date, id: string, command: string) {
    const task = new Task(title, desc, author, expectToBeDone);
    const userTasks: Task[] | undefined = deleteOrUpdateTaskFromUser(id, command, task);
    if (userTasks) renderListOfTasks(userTasks!);
}

export function renderHeaderDiv() {
    //header
    const user = getCurrentUserDetails();
    const header = document.getElementById('header') as HTMLDivElement;
    const str: string = renderHeaderUser(user!)!;
    header.innerHTML = str
    console.log(str)
}

export function renderListOfTasks(userTasks: Task[]): void {
    //render the header
    renderHeaderDiv();

    //render tasks list
    const list = document.querySelector<HTMLDivElement>('#tasks-list')!;
    if (list) {
        console.log('list', list);
        renderTasksList(list, userTasks);
    }

    const formElement = document.getElementById('form') as HTMLDivElement;
    console.log(formElement);

    if (formElement) {
        console.log(formElement);
        //run set time interval to run every minute
        setInterval(showPopUpFinishYourTask, 10000);
    }
}

export function handleDoneClick(id: string): void {
    const tasks: Task[] | undefined = deleteOrUpdateTaskFromUser(id, 'doneTask');
    if (tasks) renderListOfTasks(tasks);
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