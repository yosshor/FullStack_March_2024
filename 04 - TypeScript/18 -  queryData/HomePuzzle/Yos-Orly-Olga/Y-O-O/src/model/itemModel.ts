import laplop from '../assets/laptop.jpg'
import phone from '../assets/phone.jpg'
import tablet from '../assets/tablet.jpg'

export class Item {
    id: string = 'b' + crypto.randomUUID()
    name: string
    img: string
    description: string
    price: number
    quantity: number

    constructor(name: string, img: string, description: string, price: number, quantity: number) {
        this.name = name
        this.img = img
        this.description = description
        this.price = price
        this.quantity = quantity
    }
}

export const items: Item[] = [
    new Item('Laptop', laplop, 'Laptop', 3000, 2),
    new Item('Phone', phone, 'Phone', 2000, 1),
    new Item('Tablet', tablet, 'Tablet', 1000, 3)
]