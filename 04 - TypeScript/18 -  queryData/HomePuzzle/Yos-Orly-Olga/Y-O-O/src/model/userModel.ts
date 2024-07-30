import { Item } from "../model/itemModel";

export class User {
  name: string;
  email: string;
  password: string;
  itemsInCart: Item[] = [];
  itemsInCartDict: { [key: string]: number } = {};

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  addItemToCart(item: Item) {
    this.itemsInCart.push(item);
  }

  removeItemFromCart(item: Item) {
    this.itemsInCart.splice(this.itemsInCart.indexOf(item), 1);
  }

}

export const users: User[] = [
  new User("Yos", "yos@yos", "12345"),
  new User("Orly", "orly@orly", "12345"),
  new User("Olga", "olga@olga", "12345"),
];

export function calculateTotalPrice(user: User): number {
  let totalPrice = 0;
  user.itemsInCart.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}
