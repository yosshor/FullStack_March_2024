import { Item, ItemCategory } from "../models/Item";
import { editItemPage } from "../views/editItem";
import { homePage } from "./HomeController";
import { getAllItems, updateItemInGlobal } from "./ItemsController";

export function renderEditItem(id: string): void {
    try {
        const content = document.querySelector("#content") as HTMLDivElement;
        const item = getAllItems().find(item => item.id === id);
        if (item) {
            if (content) {
                content.innerHTML = editItemPage(item);
                content.addEventListener('submit', handleSubmitUpdateItem);
            }
        } else {
            throw new Error(`Item with id ${id} not found`);
        }
    } catch (error) {
        console.error(error);
    }
}

function handleSubmitUpdateItem(event: Event): void {
    try {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const id = form.id;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const price = parseFloat((form.elements.namedItem('price') as HTMLInputElement).value);
        const pic = (form.elements.namedItem('pic') as HTMLInputElement).value;
        const category = (form.elements.namedItem('category') as HTMLSelectElement).value as ItemCategory;
        const description = (form.elements.namedItem('description') as HTMLInputElement).value;

        updateItemInGlobal(id, new Item(category, pic, name, price, description));
        homePage();
    } catch (error) {
        console.error(error);
    }
}
