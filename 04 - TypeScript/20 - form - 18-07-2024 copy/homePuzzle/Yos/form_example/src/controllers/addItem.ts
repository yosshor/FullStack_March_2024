import { coffees } from "../models/items";
import { addItem } from "../views/coffee-form/addItem";
import { Item } from "../models/items";  
import { coffeeForm } from "../views/coffee-form/form";

export function handleAddItem(event: Event): void {
    try {
        console.log('add item', event);
        var addForm = document.getElementById('app') as HTMLDivElement;
        addForm.innerHTML = addItem(); 
    } catch (error) {
        console.error(error);
    }
}

export function addItemIntoStore(event: Event): void {
    try {
        event.preventDefault();
        const form = event.target;
        console.dir(form);  
        const name = form.name.value;
        const alt = form.alt.value;
        const price = form.price.value;
        const imageUrl = form.imageUrl.value;
        console.log(name, alt,price, imageUrl)
        const item:Item = {src: imageUrl, alt: alt, id: name, value: name, price: price }
    
        coffees.push(item);
        console.log(coffees);
        console.log('add item', event);
        var addForm = document.getElementById('app') as HTMLDivElement;
        addForm.innerHTML = coffeeForm();
        // return;
        // coffeeForm
    } catch (error) {
        console.error(error);
    }
}


