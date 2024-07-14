import { items } from "../models/items/items";
import User, { users } from "../models/users/users";
import renderItem from "../views/items/items";

export var currentUser: User;

function showSelectedItems(): string | null {
    try {
        const itemsSelected = currentUser.cart.map(id => items.find(i => i.id === id)!.name);
        const itemSelected1 = currentUser.cart.filter(id => items.find(item => item.id === id)!.name)
        console.log(itemSelected1)
        // console.log(itemsSelected)
        let select = `<select class="show-selected-items" name="show-items" id="show-item-select"> 
                    ${itemsSelected.length > 0 ?
                itemsSelected.map(item => `<option value=${item}>${item}</option>`).join('') :
                "<option value=''>No Data Found</option>"}
                    </select>`
        console.log(select)
        return select
    } catch (error) {
        console.error(error);
        return null;
    }
}

export function showItems(user: User): string {
    try {
        currentUser = user;
        let container = document.getElementById('app') as HTMLDivElement;
        const allItems = `<div class='wrapper'>
                            <div class='show-user'>
                            <p>User Image : </p> <img src=${user.img} alt=${user.name}>
                            <p>User Name Is : ${user.name}</p>
                            <p>Items In Cart : ${user.cart.length}</p>
                            ${showSelectedItems() !== null ? showSelectedItems() : ''}
                        </div><div class=container>
                        ${items.map(i => renderItem(i)).join('')}
                        ${items.map(i => renderItem(i)).join('')}</div></div>`
        container.innerHTML = allItems;
        return allItems;
    } catch (error) {
        console.error(error);
        return 'undefined';
    }
}


const findItem = (id: string) => items.filter(item => item.id === id)[0];

function handleAddItem(id: string): void {
    try {
        const item = findItem(id);
        if (item.inStock <= 0) {
            alert('This Item Out Of Range');
            return;
        }
        currentUser.addToCart(id);
        item.descFromCart();
        console.log('removed one from inStock ', item)
        showItems(currentUser);
    } catch (error) {
        console.error(error);
    }
}

function handleRemoveItem(id: string): void {
    try {
        const item = findItem(id);
        item.incrFromCart();
        if (currentUser.removeFromCart(id)) {
            showItems(currentUser);
        }
    } catch (error) {
        console.error(error);
    }
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
                        handleRemoveItem(id);
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
                handleRemoveItem(id);
            }
            else {
                handleAddItem(id);
            }
        }
    }
}

