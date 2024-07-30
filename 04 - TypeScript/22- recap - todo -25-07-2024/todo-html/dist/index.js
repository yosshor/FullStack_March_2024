var Task = /** @class */ (function () {
    function Task(description) {
        this.description = description;
        this.id = "id-" + crypto.randomUUID();
        this.done = false;
        this.edit = false;
    }
    return Task;
}());
var tasks = [];
function handleAddTask(ev) {
    ev.preventDefault();
    try {
        var description = ev.target.description.value;
        tasks.push(new Task(description)); //add to model
        renderList(tasks); //render view
        console.log(tasks);
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function renderList(tasks) {
    try {
        var html_1 = '<ol>';
        tasks.forEach(function (task) {
            html_1 += "<li>\n            " + (task.edit ?
                "<input type=\"text\" value=\"" + task.description + "\">"
                :
                    "<span class=" + (task.done ? "done" : "not-done") + " onclick=\"handleDone('" + task.id + "')\">" + task.description + "</span>") + "            \n            <button onclick=\"handleDelete('" + task.id + "')\">Delete</button>\n            <button onclick=\"handleEdit('" + task.id + "')\">Edit</button>\n            </li>";
        });
        html_1 += '</ol>';
        var list = document.querySelector('#list');
        if (!list)
            throw new Error('List not found');
        list.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function handleDelete(id) {
    try {
        var index = tasks.findIndex(function (task) { return task.id === id; });
        if (index === -1)
            throw new Error('Task not found');
        tasks.splice(index, 1);
        renderList(tasks);
    }
    catch (error) {
        console.error(error);
    }
}
function handleDone(id) {
    try {
        var task = tasks.find(function (task) { return task.id === id; });
        if (!task)
            throw new Error('Task not found');
        task.done = !task.done;
        console.log(tasks);
        renderList(tasks);
    }
    catch (error) {
        console.error(error);
    }
}
function handleEdit(id) {
    try {
        var task = tasks.find(function (task) { return task.id === id; });
        if (!task)
            throw new Error('Task not found');
        task.edit = !task.edit;
        console.log(tasks);
        renderList(tasks);
    }
    catch (error) {
        console.error(error);
    }
}
