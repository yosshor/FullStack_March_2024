const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// app.use(express.static('users'));

app.use('/', express.static(path.join(__dirname, 'users')))
app.use('/users', express.static(path.join(__dirname, 'users')))
app.use('/tasks', express.static(path.join(__dirname, 'tasks')))

app.use(express.json());
app.use('/api/users', require('./routes/users'));
app.use('/api/tasks', require('./routes/tasks'));


app.get('/', (req: any, res: any) => {
    res.send('Hello World!');

})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})