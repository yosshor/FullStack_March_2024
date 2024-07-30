import { OrderedItem } from '../models/coffee-shop'
import { coffees } from '../models/items'
import { Item } from '../models/items'
import { showItem } from '../views/coffee-form/form';


export const items: OrderedItem[] = []

export function handleSubmitEvent(event: Event): void {
    event.preventDefault();
    try {
        const form = event.target as HTMLFormElement;
        const name: string = form.name.value;
        const type: string = form.type.value;
        const coffee: [] = form.coffee;
        const size: string = form.size;
        const sugar: string = form.sugar.value;
        console.log()
        let coffeeSize: string = '';
        let coffees: string[] = [];
        const featuresArray: string[] = [];

        form.features.forEach(i => { if (i.checked) { featuresArray.push(i.defaultValue!) } })
        coffee.forEach(item => { if (item.checked) { coffees.push(item.defaultValue!) } })
        size.forEach(item => { if (item.checked) { coffeeSize = item.defaultValue! } })
        if (coffees.length > 1) { alert('Please choose only one Coffee'); form.reset(); return; }

        // console.log(`${coffees}, ${name},  ${type}, ${sugar}, ${featuresArray}, ${coffeeSize}`);
        items.push(new OrderedItem(coffees[0], name, type, featuresArray, sugar, coffeeSize, 0))
        // console.log(items);
        form.reset();


    } catch (error) {
        console.error(error);
    }
}

export function showItems(): string {
    const items = `<div name="coffee" class="coffee-images">
                    ${coffees.map(item => showItem(item)).join('')}
                    </div>`;
    return items
}