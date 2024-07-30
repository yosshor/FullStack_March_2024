export class Item {
    name: string;
    id: string = crypto.randomUUID();
    price: number;
    quantity: number;
    img: string;

    constructor(name: string, img: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.img = img
    }
}

const item1 = new Item('item1', 'img1', 10, 1);
const item2 = new Item('item2', 'img2', 20, 2);
const item3 = new Item('item3', 'img3', 30, 3);

export const items = [item1, item2, item3]
