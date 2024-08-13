import { checkEmailAndPassword, insertUser } from "../controllers/indexedDb";
import { User, users } from "../models/user";
import { renderTaskForm } from "../views/todoForm";
import { getAllUsers } from "./getUsersFromLS";



export function handleClickSignUp(event: any): void {
    try {
        event.preventDefault()
        const form = event.target;
        const firstName = form.fname.value as string;
        const lastName = form.lname.value as string;
        const email = form.email.value as string;
        const password = form.password.value as string;
        if (email == null || password == null || firstName == null || lastName == null
            || email === "" || password === "" || firstName === "" || lastName === ""
        ) {
            const loginError = document.querySelector('#loginError') as HTMLFormElement;
            loginError.innerHTML = 'Please Fill All The Fields.';
            return
        }
        console.log(email, firstName, lastName, password);
        const user = new User(firstName, lastName, email, password);
        users.push(user);
        localStorage.setItem('CurrentUser', JSON.stringify(user));
        const usersList: User[] = users;
        // const usersList: User[] = getAllUsers();
        // usersList.forEach(user => usersList.push(user))
        // usersList.push(user);
        localStorage.setItem('AllUsers', JSON.stringify(usersList));

        // localStorage.setItem('users', JSON.stringify(users));
        //localStorage.setItem(email, password);
        event.target.reset();
        console.log(email, password, user.id)
        insertUser(email, password, user.id)
            .then(() => console.log("User added successfully"))
            .catch((error) => console.error(error));

        moveToTaskListPage();



    } catch (error) {
        console.error(error);
    }
}

export function moveToTaskListPage(): void {
    const body = document.querySelector('body') as HTMLBodyElement;
    if (body) {
        body.innerHTML = `
          <div class="wrapper">
              <div class='task-form' id="task-form"></div>
              <div class='tasks-list' id="tasks-list"></div>
          </div>`;
    }

    const taskPage = document.getElementById('task-form')! as HTMLDivElement;
    if (taskPage) renderTaskForm(taskPage);
}