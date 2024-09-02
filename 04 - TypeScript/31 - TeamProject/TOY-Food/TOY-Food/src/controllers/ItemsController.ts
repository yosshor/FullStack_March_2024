import { Item, items } from "../models/Item";

export function getAllItems(): Item[] {
    let allItems = localStorage.getItem('items');
    if (allItems === null || allItems === undefined) {
        allItems = initializeItems();
    }
    const itemsGlobal: Item[] = JSON.parse(allItems!);
    itemsGlobal.forEach(item => {
        const index = items.findIndex(i => i.name === item.name);
        if (index < 0)
            items.push(item);
    });
    localStorage.setItem('items', JSON.stringify(itemsGlobal));
    return itemsGlobal;
}

export function addGlobalItem(item: Item): void {
    let allItems = localStorage.getItem('items');
    if (allItems === null || allItems === undefined) {
        allItems = initializeItems();
    }
    const itemsGlobal: Item[] = JSON.parse(allItems!);
    itemsGlobal.push(item);
    localStorage.setItem('items', JSON.stringify(itemsGlobal));
}

function initializeItems(): string {
    localStorage.setItem('items', JSON.stringify(items));
    const allItems = localStorage.getItem('items') as string;
    return allItems;
}
