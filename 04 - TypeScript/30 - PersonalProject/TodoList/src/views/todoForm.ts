import { getAllUserTasks } from "../controllers/addTaskToUser";
import { handleAddTask, renderListOfTasks } from "../controllers/handleAddTask";
import { Task } from "../models/task";
import { User, users } from "../models/user";
import './styles/dist/form.css'



export function renderTaskForm(divElement: HTMLElement): string | undefined {
    try {

        const form = `<form id='form'> 
                            <label>Task Name:</label><input type='text' name='name'>
                            <label>Task Description:</label><input type='text' name='description'>
                            <label>Time To Be Done:</label><input type='datetime-local' name='timeToBeDone'>

                            <button type='submit'>Add Task</button>
                      </form>`;
        divElement.innerHTML = form;
        const formElement = document.getElementById('form') as HTMLDivElement;
        if (formElement) formElement.addEventListener('submit', handleSubmit);

        const userTasks:Task[] | undefined = getAllUserTasks();
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
        const title = form.name.value;
        const desc = form.description.value;
        const expectToBeDone = form.timeToBeDone.value;
        const currentUserData: User = JSON.parse(localStorage.getItem('CurrentUser') as string);
        const author: string = currentUserData.firstName + " " + currentUserData.lastName; 
        console.log('found', author)
        console.log(title, desc);
        if (title === undefined || title === '' || desc === undefined || desc === '') {
            form.reset();
            throw new Error("Please fill all fields");
        }
        handleAddTask(currentUserData.email, title, desc, author, expectToBeDone);
        form.reset();

    } catch (error) {
        console.error(error);
    }
}