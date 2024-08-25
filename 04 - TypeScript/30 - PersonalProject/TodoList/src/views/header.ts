import { Task } from "../models/task";
import { User } from "../models/user";
import './styles/header.scss'



function showSelectedItems(tasks: Task[]): string | null {
    try {
        const itemsSelected = tasks.length;
        let select = `<select class="show-selected-items" name="show-items" id="show-item-select"> 
                        ${itemsSelected > 0 ?
                        tasks.map(task => `<option value=${task.title}>${task.title}</option>`).join('') :
                        "<option value=''>No Data Found</option>"}
                    </select>`
        console.log(select)
        return select
    } catch (error) {
        console.error(error);
        return null;
    }
}

export function renderHeaderUser(user: User): string | null {
    try {
        const userCart =
            `<div class='header-user'>
                    <div class='show-user'>
                    <p>User Image : </p> <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" alt="user image">
                    <p>User Name : ${user.firstName.slice(0, 1).toUpperCase() + user.firstName.slice(1, user.firstName.length) + " "
                                    + user.lastName.slice(0, 1).toUpperCase() + user.lastName.slice(1, user.lastName.length)}</p>
                    <p>Tasks Count : ${user.list.length}</p>
                    ${showSelectedItems(user.list) !== null ? showSelectedItems(user.list) : ''}
                    <button id="sign-out" class="sign-out">SignOut</button>
                </div>
                    <div class=container>
                        </div>
                </div>`;
        return userCart;
    } catch (error) {
        console.error(error);
        return null;
    }
}
