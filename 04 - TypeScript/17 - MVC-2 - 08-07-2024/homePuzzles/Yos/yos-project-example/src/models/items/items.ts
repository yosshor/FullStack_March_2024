export default class Item {
    name: string;
    id: string;
    price: number;
    src: string;
    desc: string;
    inStock: number;
    numOfItems: number;

    constructor(name: string, price: number, src: string, desc: string, inStock: number) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.price = price;
        this.src = src;
        this.desc = desc;
        this.inStock = inStock;
        this.numOfItems = inStock;
    }

    descFromCart(): boolean | void {
        this.inStock -= 1;
        console.log(`Items in stock are ${this.inStock}`)
    }


    incrFromCart() {
        if (this.inStock < this.numOfItems) {
            this.inStock += 1;
            console.log(`Items in stock are ${this.inStock} and numofitems = ${this.numOfItems}`)
        }
        else{
            console.log(`${this.numOfItems} its the max num per item`);
        }
    }

    handleClick(event: MouseEvent) {
        console.log(`Item clicked: ${this.name}`);
    }

    attachClickListener() {
        const itemElement = document.getElementById(this.id);
        if (itemElement) {
            itemElement.addEventListener('click', this.handleClick.bind(this));
        }
    }



}


const pillow = new Item('Pillow', 13.23, 'https://d128mhi1cadhb5.cloudfront.net/lervqqq4o4b3zdlo60c4500x32bs', 'pillow image', 12);
const glass = new Item('Glass', 64.23, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Bz6keQwWZVefABD7NMSseKDjS0cRCFvLwQ&s', 'cup of glass', 3);
const chair = new Item('Chair', 23.23, 'https://m.media-amazon.com/images/I/71P9QF0BYLL.jpg', ' chair image', 5);
const computer = new Item('Computer', 122.3, 'https://i0.wp.com/ten-low.co.il/wp-content/uploads/2024/02/HP_i3_NoteBook_15s-fq2019nj_BLACK.jpg?fit=1000%2C1000&ssl=1', 'computer image', 5);
const bag = new Item('Bag', 33.2, 'https://contents.mediadecathlon.com/p1818463/k$baa228586f5fbb6b704d1cd0bd249caf/55l-sports-bag-essential-navy-blue.jpg?format=auto&quality=40&f=800x800', 'bag image', 3);
const screen = new Item('screen', 13.23, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3PUTRrQeuqk4aEU3Cxlbuu2_1Y9d1RGiVA&s', 'screen image', 7);

export const items = [pillow, glass, chair, computer, bag, screen]; 