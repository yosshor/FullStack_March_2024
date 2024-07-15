import Item from '../../models/items/items';
import './dist/items.css'

export default function renderItem(item:Item){
    try {
        const html = `
        <div class='item' id="${item.id}"> 
            <img src="${item.src}" alt="${item.desc}"></img>
            <p>Title : ${item.desc}</p>
            <p>Price : ${item.price}</p>
            <p>Quantity : ${item.inStock}</p>
            <div class='items-sign' id='items-sign'>
                <span class='red' data-action='remove' data-id='${item.id}'>-</span>
                <span class='green' data-action='add' data-id='${item.id}'>+</span>
            </div>
        </div>
        `;

        return html;

    } catch (error) {
        console.error(error);
        return ''
    }
}


export function renderCartItems(item:Item){
    try {
        const html = `
        <div class='item' id="${item.id}"> 
            <img src="${item.src}" alt="${item.desc}"></img>
            <p>Title : ${item.desc}</p>
            <p>Price : ${item.price}</p>
            <div class='items-sign' id='items-sign'>
                <span class='red' data-action='remove-in-cart' data-id='${item.id}'>-</span>
                <span class='green' data-action='add-in-cart' data-id='${item.id}'>+</span>
            </div>
        </div>
        `;

        return html;

    } catch (error) {
        console.error(error);
        return ''
    }
}
