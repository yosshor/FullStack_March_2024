import { getCart } from "../controllers/HomeController";
import { Cart } from "../models/Cart";
import { Item } from "../models/Item";
import { renderNewDivElement } from "./HeaderView";
import { handleEventListeners } from "./HomeView";
import '../styles/content-page.scss';
import '../styles/main.scss';
import '../styles/cart.scss';
import '../styles/content-page.scss';
import { renderCheckoutPage } from "./checkout";

export function renderCart(cart: Cart) {
    const app = document.querySelector("#app");
    if (app) app.remove(); 
    try {
        let content = document.querySelector('#content');
        if (!content) {
            renderNewDivElement('content');
            content = document.querySelector('#content')!;
        }
        let html = '';
        html += `<h2>Your Cart Data</h2>`;
        html += `<div class="cart-wrapper">`;
        html += `<div class="item-list">`; 
        const itemsId: string[] = [];
        if (cart.items.length === 0) {
            html += `<h3>Your cart is empty</h3>`;
        } else {
            cart.items.forEach(item => {
                const count = cart.getItemCount(item.id);
                if (itemsId.includes(item.id)) return;
                itemsId.push(item.id);
                html += `<div class="item-card">
                    <h3>${item.name}</h3>
                    <div class="switchedView">
                        <img src="${item.pic}" alt="${item.name}">
                        <div class="description">
                            <p>${item.description}</p>
                        </div>
                    </div>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    ${count > 0 ? `<div class="item-quantity">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <span>${count}</span>
                        <button class="increase" data-id="${item.id}">+</button>
                      </div>` : `<button class="add-to-order" data-id="${item.id}">Add to order</button>`
                    }
                </div>`;
            });
        }
        html += `</div>`;
        html += renderTotalOrder(cart);
        html += `</div>`; 
        content.innerHTML = html;
        handleEventListeners(cart, cart.items, true);
        const checkout = document.querySelector('#checkout');
        if (checkout) {
            checkout.addEventListener('click', handleCheckoutEvent);
        }
    } catch (error) {
        console.error(error);
    }
}

function handleCheckoutEvent(event: Event) {
    console.log('checkout');
    renderCheckoutPage(document.querySelector('#content') as HTMLDivElement, getCart()! as Cart);
}

function renderTotalOrder(cart: Cart): string {
    let total: string =
        `<div class="total">
    <div class="col-25">
        <div class="container">
        <h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> 
        <b>${cart.totalItems()}</b></span></h4>`;
    // Store the quantity of each item and check for duplicates
    const itemMap = new Map<string, { item: Item, quantity: number }>();
    cart.items.forEach(item => {
        if (itemMap.has(item.id)) {
            itemMap.get(item.id)!.quantity++;
        } else {
            itemMap.set(item.id, { item: item, quantity: 1 });
        }
    });
    itemMap.forEach(({ item, quantity }) => {
        const itemTotalPrice = (item.price * quantity).toFixed(2);
        total += `<p><a href="#">${item.name} x${quantity}</a> <span class="price">$${itemTotalPrice}</span></p>`;
    });
    total += `<hr>
            <p>Total <span class="price" style="color:black"><b>$${cart.totalPrice.toFixed(2)}</b></span></p>
        </div>
              <button id='checkout' type="submit" value="Continue to checkout" class="btn">Continue to checkout</button>
       </div>
      </div>
    </div>`;

    return total;
}
