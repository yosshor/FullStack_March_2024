export interface Item {
    src: string;
    alt: string;
    value: string;
    id: string;
    price?:number;
}

const latte: Item = {
    src: "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
    alt: "latte",
    value: "coffee-latte",
    id: "coffee-latte"
}
const cappuccino: Item = {
    src: "https://leitesculinaria.com/wp-content/uploads/2023/03/cappuccino.jpg",
    alt: "cappuccino",
    value: "coffee-cappuccino",
    id: "coffee-cappuccino"
}
const espresso: Item = {
    src: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg",
    alt: "espresso",
    value: "coffee-espresso",
    id: "coffee-espresso"
}

// const tea: Item = {
//     src: "https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg",
//     alt: "tea",
//     value: "tea",
//     id: "tea"
// }
// const tea1: Item = {
//     src: "https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg",
//     alt: "tea",
//     value: "tea",
//     id: "tea"
// }

export const coffees: Item[] = [latte, cappuccino, espresso]