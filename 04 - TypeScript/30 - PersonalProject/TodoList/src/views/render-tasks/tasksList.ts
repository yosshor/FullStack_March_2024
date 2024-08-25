import { Task } from "../../models/task";
import { handleDeleteTask, handleDoneClick, handleEditTask, handleUpdateTask } from "../../controllers/handleAddTask";
import { addCommentForm, handleDeleteComment } from "../../controllers/comments";
import { renderAllComments } from "../comments/comments";
import { renderLogin } from "../../controllers/login";

import '../render-tasks/taskList.scss'

export function renderTasksList(listElement: HTMLDivElement, userTasks: Task[]): void | undefined {
    try {
        //render the tasks into the screen
        let tasksHtml = '';
        userTasks.forEach(task => {

            tasksHtml += renderTask(task)!

        });
        listElement.innerHTML = tasksHtml;
        addClickListenerEvent();

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function addClickListenerEvent(): void {
    const deleteList = document.querySelectorAll<HTMLButtonElement>('.delete')
    const editList = document.querySelectorAll<HTMLButtonElement>('.edit')
    const updateTask = document.querySelectorAll<HTMLDivElement>('.update')
    const addCommentButtons = document.querySelectorAll('[name="add-comment"]');
    const commentsDivEventListener = document.querySelectorAll<HTMLDivElement>('button[name="delete"]')
    const signout = document.getElementById("sign-out") as HTMLButtonElement;
    const taskDone = document.querySelectorAll('.task-done');

    if (deleteList) {
        deleteList.forEach(item => item.addEventListener('click', handleDelete))
    }
    if (editList) {
        editList.forEach(item => item.addEventListener('click', handleEdit))
    }
    if (updateTask) {
        updateTask.forEach(item => item.addEventListener('click', handleUpdate))
    }
    if (addCommentButtons)
        addCommentButtons.forEach(button => button.addEventListener('click', addCommentForm))

    if (commentsDivEventListener) {
        commentsDivEventListener.forEach(comment => comment.addEventListener('click', handleDeleteComment))
    }
    if (signout) {
        signout.addEventListener('click', handleSignOutClick)
    }
    if (taskDone) {
        taskDone.forEach(item => item.addEventListener('click', handleTaskDone))
    }


}

function handleTaskDone(event: any) {
    const id = event.target.id.split('task-done-')[1];
    handleDoneClick(id)
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

function handleSignOutClick(event: any) {
    const body = document.querySelector('body') as HTMLBodyElement;
    body.innerHTML = `<div class="todo-list" id="todo-list"></div>`
    const app = document.querySelector<HTMLDivElement>('#todo-list')! as HTMLDivElement;
    if (app) renderLogin(app);
    console.log('sign out event')
}

export function renderTask(task: Task): string | undefined {
    try {
        //task div element
        const taskElement = `
            <div class="task-info" id="a${task.id}">
                <div class='task'>
                    <h3 class='name'>${task.title}</h3>
                    <p class='desc'>${task.desc}</p>
                    <p id='task-done-${task.id}' class='task-done'>    ${task.done === false ? "&#128078;" : "&#128077;"}</p>
                    <p class='be-done'> Done Until : ${task.expectToBeDone.toDateString() + " " + task.expectToBeDone.toLocaleTimeString()}</p>
                    <div class='buttons'>
                        <button class='delete' id=${task.id}>Delete</button>
                        <button class='edit' id=${task.id} >Edit</button>
                        <div class="buttons buttons__add">
                            <button name="add-comment" id="${task.id}">Comment</button>
                        </div>
                    </div>
                </div>
                ${task.comments.length > 0 ? renderAllComments(task.comments, task.id) : ""}
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
                    <input type='text' class='name' for='name' name='name' value=${task.title}>
                   <input type='text' class='desc' name='desc' value=${task.desc}> 
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