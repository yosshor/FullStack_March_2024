import { Task, tasks } from "../model/todoModel";
import { renderList } from "./list";

export function renderForm(htmlElement: HTMLElement) {
    try {
        const formId = `id-${crypto.randomUUID()}`;
        if (!htmlElement) throw new Error('Element not found');

        const html = `<form id="${formId}">
            <input type="text" name="description" placeholder="Task description" required>
            <button type="submit">Add</button>
        </form>
        `

        htmlElement.innerHTML = html;

        const form = document.querySelector(`#${formId}`);
        if (!form) throw new Error('Form not found');
        form.addEventListener('submit', handleAddTask);

    } catch (error) {
        console.error(error);

    }
}

function handleAddTask(ev: any) {
    ev.preventDefault();
    console.log('Form submitted', ev);

    const form = ev.target;
    const description = form.description.value;

    if (description) {
        // tasks.push(new Task(description, false));

        const newTask = new Task(description);
       
        tasks.push(newTask);

        console.log(tasks);

        renderList(tasks, document.querySelector('#list') as HTMLElement);
        
        form.reset();
    }
}