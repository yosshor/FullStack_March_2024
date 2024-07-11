import { items } from "../models/items/items";
import User from "../models/users/users";
import renderItem from "../views/items/items";

export function showItems(user: User): string {
    try {
        console.log('the user is', user)
        let container = document.getElementById('app') as HTMLDivElement;
        const allItems = `<div class='wrapper'>
                            <div class='show-user'>
                            <p>User Image : </p> <img src=${user.img} alt=${user.name}>
                            <p>User Name Is : ${user.name}</p>
                            <p>Items In Cart : ${user.cart.length}</p>
                        </div><div class=container>
                        ${items.map(i => renderItem(i)).join('')}
                        ${items.map(i => renderItem(i)).join('')}</div></div>`
        console.log(container);
        container.innerHTML = allItems;
        return allItems;
    } catch (error) {
        console.error(error);
        return 'undefined';
    }
}

function handleAddItem(action: string, id: string): void {
    console.log(action, id);

}

function handleRemoveItem(action: string, id: string): void {
    console.log(action, id);
}

export function showItems2(): HTMLDivElement | undefined {
    try {
        var container = document.createElement('div')
        container.classList.add('container');

        if (container) {
            container.innerHTML = items.map(i => renderItem(i)).join('') + items.map(i => renderItem(i)).join('');
            console.log(container)

            // Attach event listeners after rendering
            container.querySelectorAll('.items-sign span').forEach(span => {
                span.addEventListener('click', (event) => {
                    const target = event.target as HTMLElement;
                    const action = target.getAttribute('data-action');
                    const id = target.getAttribute('data-id');
                    if (action && id) {
                        handleRemoveItem(action, id);
                    }
                });
            });
        }
        return container;


    } catch (error) {
        console.error(error);
        return undefined;
    }
}
// document.addEventListener('DOMContentLoaded', showItems);


// Attach event listeners after rendering
document.addEventListener('click', handleClickEvent)

function handleClickEvent(event: Event) {
    // console.log(event)
    const target = event.target as HTMLElement;
    if (target.tagName === 'SPAN') {
        const action = target.getAttribute('data-action');
        const id = target.getAttribute('data-id');
        if (action && id) {
            // console.log('event')
            if (action === 'remove') {
                handleRemoveItem(action, id);
            }
            else {
                handleAddItem(action, id);
            }
        }
    }
}

