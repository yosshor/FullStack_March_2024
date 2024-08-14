import { Task, tasksList } from "../models/task";
import { handleDeleteTask, handleEditTask, handleUpdateTask } from "../controllers/handleAddTask";
import { handleSubmit } from "./todoForm";

import './styles/dist/taskList.css'


export function renderTasksList(listElement: HTMLDivElement, userTasks: Task[]): void | undefined {
    try {
        //render the tasks into the screen
        let tasksHtml = '';
        userTasks.forEach(task => tasksHtml += renderTask(task)!);
        listElement.innerHTML = tasksHtml;
        addClickListenerEvent();

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function addClickListenerEvent(): void {
    const deleteList = document.querySelectorAll<HTMLButtonElement>('.delete')
    const editList = document.querySelectorAll<HTMLButtonElement>('.edit')
    const updateTask = document.querySelectorAll<HTMLDivElement>('.update')
    //const formElement = document.getElementById('form') as HTMLDivElement;

    if (deleteList) {
        deleteList.forEach(item => item.addEventListener('click', handleDelete))
    }
    if (editList) {
        editList.forEach(item => item.addEventListener('click', handleEdit))
    }
    if (updateTask) {
        updateTask.forEach(item => item.addEventListener('click', handleUpdate))
    }
}

function handleDelete(event: any): void {
    const id = event.target.id;
    console.log('delete', id);
    handleDeleteTask(id);

}
function handleEdit(event: any): void {
    const id = event.target?.id;
    console.log('edit', event.target?.id);
    handleEditTask(id)
    addClickListenerEvent();

}

function handleUpdate(event: any): void {
    const form = event.target.form;
    const id = form?.id;
    const title = form.name.value;
    const desc = form.desc.value;
    const timeToBeDone = new Date(form.timeToBeDone.value);
    handleUpdateTask(id, title, desc, timeToBeDone, form);
}

function renderTask(task: Task): string | undefined {
    try {
        //task div element
        const taskElement = `
            <div class='task' id=a${task.id}>
                <h3 class='name'>${task.title}</h3>
                <p class='desc'>${task.desc}</p>
                <p class='be-done'> Done Until : ${task.expectToBeDone.toDateString() + " " + task.expectToBeDone.toLocaleTimeString()}</p>
                <div class='buttons'>
                    <button class='delete' id=${task.id}>Delete</button>
                    <button class='edit' id=${task.id} >Edit</button>
            </div>
            </div>
        `;
        return taskElement;

    } catch (error) {
        console.error(error);
        return undefined;
    }

}


export function handleEditHtmlTag(ele: HTMLDivElement, task: Task) {
    try {

        let div = `<form id="form-${task.id}">
                    <input class='name' for='name' name='name' value=${task.title}>
                   <input class='desc' name='desc' value=${task.desc}> 
                   <input type='datetime-local' name='timeToBeDone' class='be-done' value="${task.expectToBeDone}"> 
                   <button class="delete" id="${task.id}">Delete</button>
                   <button style="background-color:green; color:white;" class="update" id="${task.id}">Update</button>
                   </form>`
        ele.innerHTML = div;
        const form = document.getElementById(`form-${task.id}`) as HTMLDivElement;
        if (form) {
            form.addEventListener('submit', handleUpdate);
            const inputTime = form.getElementsByClassName('be-done')[0] as HTMLInputElement;
            const date = new Date(task.expectToBeDone);
            const formattedDateTime = date.toISOString().slice(0, 16);
            inputTime.value = formattedDateTime;
        }

    } catch (error) {
        console.error(error);
    }
}