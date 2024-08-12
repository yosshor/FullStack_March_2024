import { User, users } from "../models/user";
import { renderLoginPage } from "../views/login";
import { renderRegisterForm } from "../views/register";
import { checkEmailAndPassword } from "./indexedDb";
import { moveToTaskListPage } from "./signup";


export function renderLogin(app: HTMLDivElement): void {
    try {
        if (!app) throw new Error('No app found');

        const htmlLogin = renderLoginPage()!;
        app.innerHTML = htmlLogin;
        const loginForm = document.querySelector('#loginForm') as HTMLFormElement;
        const register = document.querySelector('#register-btn') as HTMLDivElement;
        if (loginForm) loginForm.addEventListener('submit', handleLogin);
        if (register) register.addEventListener('click', handleRegister);

    }
    catch (error) {
        console.error(error);
    }
}

function handleLogin(event: any): void {
    event.preventDefault();
    console.log('Login button clicked');
    const form = event.target;
    const email = form.email.value as string;
    const password = form.password.value as string;
    console.log('Email:', email, 'Password:', password);
    //users.push(new User());

    //localStorage.setItem(email, password);
    // localStorage.setItem('CurrentUser', JSON.stringify(user));




    checkEmailAndPassword(email, password)
        .then((isValid) => {
            if (isValid) {
                console.log("Email and password are correct.");
                localStorage.setItem('CurrentUser', email)
                moveToTaskListPage();

            } else {
                const loginError = document.querySelector('#loginError') as HTMLFormElement;
                loginError.innerHTML = 'Email or password is incorrect.';
                console.log("Email or password is incorrect.");
            }
        })
        .catch((error) => console.error(error));



    event.target.reset();
}

function handleRegister(event: any): void {
    try {
        event.preventDefault();

        console.log('Register button clicked');
        const todo = document.querySelector('#todo-list') as HTMLDivElement;
        if (todo) renderRegisterForm(todo);
    } catch (error) {
        console.error(error);
    }
}