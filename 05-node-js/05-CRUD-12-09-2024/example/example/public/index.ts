class Task {
    id: string;
    task: string;
    description: string;
    done: boolean;
    constructor(task: string, description: string, done: boolean) {
        this.id = `id-${crypto.randomUUID()}`;
        this.task = task;
        this.description = description;
        this.done = done;
    }
    toggleDone() {
        this.done = !this.done;
    }
}

const tasks: Task[] = [];

//controllers

async function handleOnLoad() {
    try {
        const serverTasks = await getTasksFromDB();
        console.log(serverTasks);
        serverTasks.forEach(task => {
            const newTask = new Task(task.task, task.description, task.done);
            tasks.push(newTask);
        });
        renderTasks();
    } catch (error) {
        console.error(error);
    }
}

async function getTasksFromDB() {
    try {
        const response = await fetch('/api/get-tasks');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}


const form = document.querySelector('#the-form')!;
form.addEventListener('submit', (event) => {
    try {


        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const task = form.task.value;
        const description = form.description.value;
        const _task = new Task(task, description, false);
        tasks.push(_task);
        renderTasks();

        //send to DB
        addNewTaskToDB(_task);

        

    } catch (error) {
        console.error(error);
    }
});


async function addNewTaskToDB(task: Task) {
    try {

        const response = await fetch('/api/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);

    }
}

async function handleToggleTaskToDB(task: Task) {
    try {
      
        const taskId = task.id;
        if(!taskId) throw new Error('Task id is required');
        const result = await fetch(`/api/toggle-task`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({taskId:taskId})
        });
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.error(error);
        
    }
}

function renderTasks() {
    try {

        const tasksElement = document.querySelector('#tasks');
        if (!tasksElement) throw new Error('Tasks element not found');
        let html = '';
        tasks.forEach(task => {
            html += `
            <div class="task ${task.done?"task--done":null}">
                <h2>${task.task}</h2>
                <p>${task.description}</p>
                <button onclick="toggleDone('${task.id}')">${task.done ? 'Undone' : 'Done'}</button>
                 <button onclick="handleDelete()">Delete</button>
            </div>
        `;

        });
        tasksElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function toggleDone(id: string) {
    try {
        const task = tasks.find(task => task.id === id);
        if (!task) throw new Error('Task not found');
        task.toggleDone();
        handleToggleTaskToDB(task);
        renderTasks();
    } catch (error) {
        console.error(error);
    }
}