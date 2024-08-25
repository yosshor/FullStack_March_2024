import { getAllUserTasks } from "../controllers/addTaskToUser";
import { handleAddTask, renderHeaderDiv, renderListOfTasks } from "../controllers/handleAddTask";
import { Task } from "../models/task";
import { User } from "../models/user";
import './styles/form.scss'



export function renderTaskForm(divElement: HTMLElement): string | undefined {
    try {
        renderHeaderDiv();
        const form = `<form id='form'> 
                            <label>Task Name:</label><input type='text' name='name'>
                            <label>Task Description:</label><input type='text' name='description'>
                            <label>Time To Be Done:</label><input type='datetime-local' name='timeToBeDone'>
                            <button type='submit'>Add Task</button>
                      </form>`;
        divElement.innerHTML = form;
        const formElement = document.getElementById('form') as HTMLDivElement;
        if (formElement) {
            formElement.addEventListener('submit', handleSubmit);
            putDateInInputDateForm();
        }
        const userTasks: Task[] | undefined = getAllUserTasks();
        renderListOfTasks(userTasks!);
        return form;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function handleSubmit(event: any) {
    try {
        const form = event.target as HTMLFormElement;
        if (!form) throw new Error("Form not found");
        event.preventDefault();
        const title = form.name.value as string;
        const id = form.id;
        console.log('id', id)
        const desc = form.description.value;
        const expectToBeDone = form.timeToBeDone.value;
        const currentUserData: User = JSON.parse(localStorage.getItem('CurrentUser') as string);
        const email = currentUserData.email;
        const author: string = currentUserData.firstName + " " + currentUserData.lastName;
        if (title === undefined || title === '' || desc === undefined || desc === '') {
            throw new Error("Please fill all fields");
        }
        handleAddTask(id, title, desc, author, expectToBeDone);
        form.reset();
        putDateInInputDateForm();

    } catch (error) {
        console.error(error);
    }
}

function putDateInInputDateForm(): void {

    const timeInput = document!.getElementsByName('timeToBeDone')[0] as HTMLInputElement;
    if (timeInput) {
        const now = new Date();
        const formattedDateTime = now.toISOString().slice(0, 16);
        timeInput.value = formattedDateTime;
    }
}