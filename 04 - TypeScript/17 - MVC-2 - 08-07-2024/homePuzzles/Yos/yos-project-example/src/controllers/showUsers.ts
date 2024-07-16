import { users } from "../models/users/users";
import renderUser from "../views/users/user";
import { showItems } from "./showItems";


export function showUsers(): string {
    try {
        const allUsers = `<div class=container id=container>${users.map(u => renderUser(u)).join('')}
        ${users.map(u => renderUser(u)).join('')}</div>`
        console.log(allUsers);
        return allUsers;
    } catch (error) {
        console.error(error)
        return 'undefined'
    }
}


// Attach event listeners after rendering
document.addEventListener('click', handleClickEvent)

function handleClickEvent(event: Event) {
    // console.log(event)
    let container = document.getElementById('app') as HTMLDivElement;

    const target = event.target as HTMLElement;
    if (target.tagName === 'BUTTON' && target.className !== 'get-user-cart' && target.className !== 'get-to-shop') {
        const id = event.target!.id;
        // console.log(id,event)
        const user = users.find(u => u.id === id);
        showItems(user!, container);
    }
}
