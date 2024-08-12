import { tasksList, Task } from "../models/task";
import { handleEditHtmlTag, renderTasksList } from "../views/tasksList";



export function handleAddTask(title: string, desc: string, author: string, expectToBeDone: Date): void | undefined {
    try {
        const task = new Task(title, desc, author, expectToBeDone);
        tasksList.push(task);
        console.log(tasksList, task)
        renderListOfTasks();

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function renderListOfTasks() {
    //render tasks list
    debugger
    const body = document.querySelector('body')!;
    body.innerHTML = '';
//     <div class="wrapper">

//     <div class='form' id="form"></div>
//     <div class='tasksList' id="tasksList"></div>

//   </div>
    const list = document.querySelector<HTMLDivElement>('#tasksList')!;
    if (list) {
        console.log('list', list);
        renderTasksList(list);
    }
}

export function handleDeleteTask(id: string) {
    try {
        const task = tasksList.findIndex(task => task.id === id);
        console.log('task num', task);
        tasksList.splice(task, 1);
        console.log('deleted')
        renderListOfTasks();


    } catch (error) {
        console.error(error);
    }
}

export function handleEditTask(id: string): void {
    try {
        const task = tasksList.find(task => task.id === id);
        const taskDiv = document.getElementById(`a${id}`) as HTMLDivElement;
        handleEditHtmlTag(taskDiv, task!);
    } catch (error) {
        console.error(error);
    }
}


export function handleUpdateTask(id: string, event: any): void {
    try {
        const task = tasksList.find(task => task.id === id);
        // console.log(task)
        const taskDiv = document.querySelector(`#a${id}`) as HTMLDivElement;
        console.dir('taskDiv', taskDiv);
        console.log('name', event);
        event.preventDefault();
        // console.log('task', task);
        // console.log('event', event.target);
        // task.name = event.name;
        // task.description = event.desc;
        // task.done = event.done;
        // renderListOfTasks();
        return;
    } catch (error) {
        console.error(error);
    }
}