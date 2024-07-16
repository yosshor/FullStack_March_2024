import Item from "../../models/items/items";
import User from "../../models/users/users";
import { showTotalCost } from "../../controllers/showUserCart"
import { renderCartItems } from "../items/items";


export function getUserCartDom(user: User, userItems: Item[]): string | null {
    try {
        const userCart =
            `<div class='wrapper'>
                    <div class='show-user'>
                    <p>User Image : </p> <img src=${user.img} alt=${user.name}>
                    <p>User Name : ${user.name}</p>
                    <p>Items In Cart : ${user.cart.length}</p>
                    <p>Total Cost : ${showTotalCost(user)}</p>
                    <button class="get-to-shop">Back To Shop</button>
                </div><div class=container>
                ${userItems.map(i => renderCartItems(i)).join('')}
                </div></div>`;
        return userCart;
    } catch (error) {
        console.error(error);
        return null;
    }
}