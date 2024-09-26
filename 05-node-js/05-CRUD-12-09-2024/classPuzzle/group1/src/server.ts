import express from 'express';
const app = express()
const port = 3000;
app.use(express.json());

class Task {
  id: string;
  task: string;
  description: string;
  done: boolean;
  constructor(id:string, task: string, description: string, done: boolean) {
    this.id = id;
    this.task = task;
    this.description = description;
    this.done = done;
  }
  toggleDone() {
    this.done = !this.done;
  }
}

const tasks: Task[] = [];

console.log("Hello World")

app.use(express.static('public')) //serve static files from folder "public"
// Routes
//root route
app.post('/api/add-task', (req, res) => {
  try {
    const task = req.body;
    if (!task) { //if task is empty
      res.status(400).send('Task and description are required');
      return;
    }

    const newTask = new Task(task.id, task.task, task.description, task.done);
    console.log(newTask)


    tasks.push(newTask);
    res.status(201).send(tasks);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.get('/api/get-tasks', (req, res) => {
  try {
    res.status(200).send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

//update task
//put -> update the entire task
//patch -> update part of the task
app.patch('/api/toggle-task', (req, res) => {
  try {

    const {taskId} = req.body;
    console.log(taskId);
    if(!taskId){
      res.status(400).send('Task id is required');
      return;
    }
    const task = tasks.find(task => task.id === taskId);
    if(!task){
      res.status(400).send('Task not found');
      return;
    }
    task.toggleDone();
    console.log("task toggled", task.task, task.done);
    res.status(200).send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.delete(`/api/delete-task`, (req, res) => {
  try {
    const {taskId} = req.body;
    if(!taskId){
      res.status(400).send('Task id is required');
      return;
    }
    const index = tasks.findIndex(task => task.id === taskId);
    if(index === -1){
      res.status(400).send('Task not found');
      return;
    }
    tasks.splice(index, 1);
    res.status(200).send(tasks);
  } catch (error) {
    console.error(error);
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})