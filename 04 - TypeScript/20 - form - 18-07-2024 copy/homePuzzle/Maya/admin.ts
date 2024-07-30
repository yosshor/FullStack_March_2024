
class Item {
    name:string;
    price:number;
    quantity:number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const items: Item[] = [];

function handleAddItem(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const itemName = (form.querySelector('#itemName') as HTMLInputElement).value;
    const itemPrice = parseFloat((form.querySelector('#itemPrice') as HTMLInputElement).value);
    const itemQuantity = parseInt((form.querySelector('#itemQuantity') as HTMLInputElement).value, 10);

    const newItem = new Item(itemName, itemPrice, itemQuantity);
    items.push(newItem);

    console.log(items);
    form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adminForm') as HTMLFormElement;
    form.addEventListener('submit', handleAddItem);
});