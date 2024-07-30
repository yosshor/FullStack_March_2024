import { handleAddTask } from "../controllers/handleAddTask";
import { TasksList } from "../models/task"; 
import './dist/form.css'


export function renderForm(divElement:HTMLElement): string | undefined{
    try {
        const form = `<form id='form'> <label>Task Name:</label><input type='text' name='name'>
                            <label>Task Description:</label><input type='text' name='description'>
                            <button type='submit'>Add Task</button>
                      </form>`;
        divElement.innerHTML = form;
        const formElement = document.getElementById('form') as HTMLDivElement;
        if(formElement) formElement.addEventListener('submit', handleSubmit);

        return form;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function handleSubmit(event:Event){
    const form = event.target as HTMLFormElement;
    if (!form) throw new Error("Form not found");
    event.preventDefault();
    const name = form.name.value!;
    const desc = form.description.value;
    console.log(name, desc);    
    if(name=== undefined || name === '' || desc === undefined || desc === ''){
        form.reset();
        throw new Error("Please fill all fields");
    }
    //another way
    // const formData = new FormData(form);
    // const name = formData.get('name');
    // const description = formData.get('description');
    handleAddTask(name, desc);


    form.reset();

    
}