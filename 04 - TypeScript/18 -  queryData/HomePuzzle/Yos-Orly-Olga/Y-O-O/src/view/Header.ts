import logo from "../assets/logo.png";
import "./dist/header.css";
import { renderHeaderCustomerCard } from "./Customer";
// import { Customer } from "../models/customerModel";
// import { guest } from "../models/customerModel";
// import { currentCustomer } from "../controllers/RegistrationController";
import { User } from "../model/userModel";
// import { renderCart } from "./item";
// import { Item } from "../model/itemModel";

export function renderHeader(user: User): string {
  try {
    const html = `<header>
    <div class="menu">
        <div class="topMenu">
            <img src="${logo}" alt="logo" />
            <input type="search" name="search" id="search" />
            <div class="customerCard">${renderHeaderCustomerCard(user)}</div>
            <button class="cartHeader"><i class='bx bx-cart-alt cartHeader' style='color:#ffffff' ></i><span id="inCart" class="cartHeader">${user.itemsInCart?.length}</span></button>
        </div>
        <nav>
            <ul>
                <li>
                  <select id="categories" name="categories">
                    <option value="all">All categories</option>
                    <option value="banana">banana</option>
                    <option value="orange">orange</option>
                  </select>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    </header>
    `;
    return html;
  } catch (e) {
    console.error(e);
    return "";
  }
}
