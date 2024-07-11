export default class Item {
    name: string;
    id: string;
    price: number;
    src: string;
    desc: string;


    constructor(name: string, price: number, src: string, desc: string) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.price = price;
        this.src = src;
        this.desc = desc;
    }
    handleClick(event: MouseEvent) {
        console.log(`Item clicked: ${this.name}`);
        // Add any additional logic here
    }

    attachClickListener() {
        const itemElement = document.getElementById(this.id);
        if (itemElement) {
            itemElement.addEventListener('click', this.handleClick.bind(this));
        }
    }
    


}


const pillow = new Item('Pillow', 13.23, 'https://d128mhi1cadhb5.cloudfront.net/lervqqq4o4b3zdlo60c4500x32bs','pillow image');
const glass = new Item('Glass', 64.23, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Bz6keQwWZVefABD7NMSseKDjS0cRCFvLwQ&s', 'cup of glass');
const chair = new Item('Chair', 23.23, 'https://m.media-amazon.com/images/I/71P9QF0BYLL.jpg',' chair image');
const computer = new Item('Computer', 122.3, 'https://i0.wp.com/ten-low.co.il/wp-content/uploads/2024/02/HP_i3_NoteBook_15s-fq2019nj_BLACK.jpg?fit=1000%2C1000&ssl=1', 'computer image');
const bag = new Item('Bag', 33.2, 'https://contents.mediadecathlon.com/p1818463/k$baa228586f5fbb6b704d1cd0bd249caf/55l-sports-bag-essential-navy-blue.jpg?format=auto&quality=40&f=800x800', 'bag image');
const screen = new Item('screen', 13.23, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3PUTRrQeuqk4aEU3Cxlbuu2_1Y9d1RGiVA&s', 'screen image');

export const items = [pillow, glass, chair, computer, bag, screen]; 