import { Task } from "../model/todoModel";

export function renderList(tasks: Task[], htmlElement: HTMLElement) {
    try {
        let html = '';
        tasks.forEach(task => {
            html += renderTask(task);
        });

        if (!htmlElement) throw new Error('Element not found');
        htmlElement.innerHTML = html;

    } catch (error) {
        console.error(error);

    }
}



export function renderTask(task: Task) {
    try {
        const html = `<div>${task.description} <button>Done</button></div>`;
        return html;
    } catch (error) {
        console.error(error);

    }
}