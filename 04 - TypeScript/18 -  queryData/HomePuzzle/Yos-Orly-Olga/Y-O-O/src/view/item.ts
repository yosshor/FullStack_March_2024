import { Item } from "../model/itemModel";
import { User, calculateTotalPrice } from "../model/userModel.ts";
// import { renderHeader } from "./Header";

// const guest: User = { name: "Guest", email: "", password: "" };

export function renderItem(item: Item): string {
  try {
    let html = `
        <div class="card">
        <h3 class="card-title">${item.name}</h3>
            <div class="card-image">
                <img class="card-img-top" src="${item.img}" alt="">
            </div>
            <div class="card-body">

                <p class="card-text">${item.description}</p>
                <p class="card-text">Price: ${item.price}$</p>
                <p class="card-text">In stock: ${item.quantity}</p>
                <p class="card-text">In cart: <span id="${item.id}">0</span></p>
            </div>
            <div class="card-buttons">
                <button class="remote">remove</button>
                <button class="addToCart"">add more items</button>
                </div>
        </div>
        `;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function renderItems(items: Item[]): string {
  try {
    let html = "";
    html += "<div class='wrapper'>";
    items.forEach((item) => {
      html += renderItem(item);
    });
    html += "</div>";
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function renderCart(user: User): string {
  try {
    let html = "";
    if (user.itemsInCart?.length === 0) {
      html += "<div class='wrapper'>";
      html += "<p>Your cart is empty</p><button class='back'>Back</button>";
      html += "</div>";
    } else {
      const items = user.itemsInCart as Item[];
      html += "<button class='back'>Back to catalog</button><div class='wrapper'>";
      items.forEach((item) => {
        html += renderItem(item);
      });
      html += `</div><h1>Total price: ${calculateTotalPrice(user)}</h1><button class='buy'>Buy</button>`;
    }
    console.log(user.itemsInCart)
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}
