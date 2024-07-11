class Item {
    name: string;
    price: number;
    id: string;
    inStock: boolean;

    constructor(name: string, price: number, inStock: boolean = true) {
        this.name = name;
        this.price = price;
        this.id = crypto.randomUUID();
        this.inStock = inStock;
    }

    notInStock(){
        this.inStock = false;
    }
}

class Buyer {
    name: string;
    id: string;
    cart: string[];

    constructor(name: string) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.cart = []; 
    }

    addItem(id: string) {
        this.cart.push(id);
    }
}

const item1 = new Item('Soup', 12.34);
const item2 = new Item('Bag', 9.34);
const item3 = new Item('Pillow', 14.34);
const items = [item1, item2, item3];

const maya = new Buyer('Maya');
const michael = new Buyer('Michael');
const yos = new Buyer('Yos');
const buyers = [maya, michael, yos];

maya.addItem(item1.id);
maya.addItem(item2.id);
item1.notInStock();
michael.addItem(item1.id);

console.log(buyers);
console.log(items);
