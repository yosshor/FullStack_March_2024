import Item, { items } from "../models/items/items";
import User from "../models/users/users";
import renderItem, { renderCartItems } from "../views/items/items";


function showTotalCost(user: User): string | null {
    try {
        let cost: number = 0;
        user.cart.map(id => cost += items.find(i => i.id === id)!.price);
        console.log(cost)
        return cost.toFixed(2);
    } catch (error) {
        console.error(error);
        return null;
    }
}


export function showUserCart(user: User): string {
    try {
        const totalCost = 0;
        const userItems: Item[] | undefined = user.cart.map(i => items.find(item => item.id === i)!); //.join('')
        console.log(user, userItems)
        let container = document.getElementById('app') as HTMLDivElement;
        const allItems = `<div class='wrapper'>
                            <div class='show-user'>
                            <p>User Image : </p> <img src=${user.img} alt=${user.name}>
                            <p>User Name : ${user.name}</p>
                            <p>Items In Cart : ${user.cart.length}</p>
                            <p>Total Cost : ${showTotalCost(user)}</p>
                            <button class="get-to-shop">Back To Shop</button>
                        </div><div class=container>
                        ${userItems.map(i => renderCartItems(i)).join('')}
                        </div></div>`
        container.innerHTML = allItems;
        return allItems;
    } catch (error) {
        console.error(error);
        return 'undefined';
    }
}
