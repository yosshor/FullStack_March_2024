import { CoffeeItem } from "../Model/itemModel";

export class adminView{
    container :HTMLElement;

    constructor(containerId:string){
        this.container = document.getElementById(containerId) as HTMLElement;
    }

    render(items: CoffeeItem[]): void {
        this.container.innerHTML = '';
        this.renderAddItemForm();
        this.renderItemList(items);
      }
      private renderAddItemForm(): void {
        const form = document.createElement('form');
        form.id = 'addItemForm';
        form.innerHTML = `
          <h2>Add New Item</h2>
          <input type="text" name="name" placeholder="Item Name" required>
          <input type="number" name="price" placeholder="Price" step="0.01" required>
          <input type="number" name="quantity" placeholder="Quantity" required>
          <button type="submit">Add Item</button>
        `;
        this.container.appendChild(form);
      }
      private renderItemList(items: CoffeeItem[]): void {
        const itemList = document.createElement('div');
        itemList.innerHTML = '<h2>Manage Items</h2>';
        items.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.innerHTML = `
            <input type="text" value="${item.name}" data-id="${item.id}" class="item-name">
            <input type="number" value="${item.price}" data-id="${item.id}" class="item-price" step="0.01">
            <input type="number" value="${item.quantity}" data-id="${item.id}" class="item-quantity">
            <button data-id="${item.id}" class="delete-item">Delete</button>
          `;
          itemList.appendChild(itemElement);
        });
        this.container.appendChild(itemList);
      }
}