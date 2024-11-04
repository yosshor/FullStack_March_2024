import "./dist/styles.css";

async function main() {
  // get all users from the server
  const users = await getDataFromServer("/api/users/all-users");
  renderUsers(users.users);
}

async function getDataFromServer(url: string) {
  // get all users from the server
  try {
    const req = await fetch(url);
    const data = await req.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function renderUsers(users: User[]) {
  const usersDiv = document.getElementById("users") as HTMLDivElement;
  let htmlDiv = "";
  users.forEach((user) => {
    htmlDiv += `
        <div class="user">

        <div class="image">
          <img src="${user.imageUrl}" alt="user image" />
        </div>
        
        <div class="user-details">
          <h2>${user.name}</h2>
          <p>${user.job}</p>
          <p>${user.email}</p>
          <p>${user.mobile}</p>
          <p>${user.address}</p>
        </div>
        </div>


        `;
    usersDiv.innerHTML = htmlDiv;
  });
}

function handleGetAllUsers() {
  main();
}

async function handleGetAllTasks() {
  // move to task page
  window.location.href = "../tasks/index.html";
}

async function handleAddUser(event: any) {
  try {
    event.preventDefault();
    const form = event.target;
    const { name, age, title } = form;
    console.log(name.value, age.value, title.value);
    const users = await addUser(name.value, title.value, age.value);
    renderUsers(users.users);
    form.reset();
  } catch (error) {
    console.log(error);
  }
}

async function addUser(
  name: string,
  title: string,
  age: number
): Promise<User[] | undefined> {
  try {
    const url = `/api/users/add-user?name=${name}&title=${title}&age=${age}`;
    console.log(url, { method: "POST" });
    const req = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await req.json();
    console.log(data);
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function renderTasks(tasks: Task[]) {
  const tasksDiv = document.getElementById("tasks") as HTMLDivElement;
  let tasksHtml = "";
  tasks.forEach((task) => {
    tasksHtml += `
        <div class="task">
        <h2>${task.name}</h2>
        <p>${task.description}</p>
        <p>${task.id}</p>
        </div>
        `;
  });
  tasksDiv.innerHTML = tasksHtml;
}
