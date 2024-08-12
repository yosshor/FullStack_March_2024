import { handleAddTask } from "../controllers/handleAddTask";
import { Task } from "../models/task";
import { User } from "../models/user";
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

        return form;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function handleSubmit(event: Event) {
    try {
        const users : User[] = [];
        
        const form = event.target as HTMLFormElement;
        if (!form) throw new Error("Form not found");
        event.preventDefault();
        const name = form.name.value!;
        const desc = form.description.value;
        const expectToBeDone = form.timeToBeDone.value;
        const currentUser = localStorage.getItem('CurrentUser') as string;
        const usersStr = JSON.parse(localStorage.getItem('AllUsers') as string);
        usersStr.forEach(user => {
                users.push(new User(user.firstName, user.lastName, user.email, user.password))
        });
        console.log(users)
        const author1 = users.find(user => user.email == currentUser);
        console.log('found',author1)
        const author = currentUser;
        console.log(author)
        console.log(name, desc);
        if (name === undefined || name === '' || desc === undefined || desc === '') {
            form.reset();
            throw new Error("Please fill all fields");
        }
        //handleAddTask(name, desc, author, expectToBeDone);
        form.reset();

    } catch (error) {
        console.error(error);
    }
}