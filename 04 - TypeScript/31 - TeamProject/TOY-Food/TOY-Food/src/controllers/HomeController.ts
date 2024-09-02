import { renderFooter } from '../views/FooterView';
import { renderHeader } from '../views/HeaderView';
import { renderHomePage } from '../views/HomeView';
import { Cart } from "../models/Cart";
import { getAllItems } from './ItemsController';

// const cart: Cart = getCart() ?? new Cart();

export function getCart(): Cart | undefined {
  const  { cartId, userId, items, totalPrice } = JSON.parse(localStorage.getItem('cart') || '{}')
  const cart: Cart = new Cart(cartId, userId, items, totalPrice );
  return cart
}



/**
 * Renders the home page of the application, including the header, 
 * the items in the catalog, and the footer.
 */
export function homePage() {
  const allItems = getAllItems();
  const cart: Cart = getCart() ?? new Cart();
  renderHeader();
  renderHomePage(cart, allItems);
  renderFooter();
}


