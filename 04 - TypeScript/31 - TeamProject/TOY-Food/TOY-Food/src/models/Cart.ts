import { Item } from './Item';

export class Cart {
  public cartId: string;
  public userId: string;
  public items: Item[];
  public totalPrice: number;
  constructor(cartId?: string, userId?:string, items?: Item[], totalPrice?: number) {
    this.cartId =  cartId ?? `id${crypto.randomUUID()}`;
    this.userId = userId ?? 'guest';
    this.items =  items ?? [];
    this.totalPrice = totalPrice ?? 0;
  }
  addItem(item: Item): void {
    this.items.push(item);
    this.totalPrice += item.price;
    this.updateLocalStorage();
  }
  removeItem(id: string): void {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      this.totalPrice -= this.items[itemIndex].price;
      this.items.splice(itemIndex, 1);
      this.updateLocalStorage();
    }
  }
  getItemCount(id: string): number {
    return this.items.filter(item => item.id === id).length;
  }
  updateLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this));
  }
  totalItems(): number {
    console.log(this.items.length);
    return this.items.length ?? 0;
  }
}
