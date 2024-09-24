import { items } from "../models/Item";
import { addGlobalItem, removeGlobalItem } from "../controllers/ItemsController";
import { Item, ItemCategory } from "../models/Item";
import '../styles/addItem.scss';
import { homePage } from "../controllers/HomeController";

export function addItem(div: HTMLDivElement): void {
    if (!div) {
        throw new Error('add item div not found');
    }
    const newItem = `
        <div class="form-wrapper">
            <div class="wrapper">
                <h1>Add New Item</h1>   
                <div class="form">
                    <form id="addItemForm">
                        <div class="name">      
                            <label>Name : </label>
                            <input type="text" name="name" id="name" placeholder="Enter Item Name" required>
                        </div>
                        <div class="price">
                            <label>Price : </label>
                            <input type="number" step="0.01" min="0" name="price" id="price" placeholder="Enter Item Price" required>
                        </div>  
                        <div class="pic">      
                            <label>Picture Url : </label>
                            <input type="text" name="pic" id="pic" placeholder="Enter Picture Url" required>
                        </div>
                        <div class="description">      
                            <label>Description : </label>
                            <input type="text" name="description" id="description" placeholder="Enter Item Description" required>
                        </div>
                        <div class="category">
                            <label>Category : </label>
                            <select name="category" id="category" required>
                                ${Object.values(ItemCategory).map(category =>
                                    `<option value="${category}">${category}</option>`)
                                    .join('')}
                            </select>
                        </div>
                        <div class="submit">
                            <button type="submit">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    div.innerHTML = newItem;

    const addItemForm = document.querySelector('#addItemForm');
    if (addItemForm) {
        addItemForm.addEventListener('submit', handleAddItemSubmit);
    }
}

export function removeItem(id: string): void {
    if (id) {
        const index = items.findIndex(item => item.id === id);
        if (index > -1) {
            items.splice(index, 1);
        }
        removeGlobalItem(id);
    }
}

function handleAddItemSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const price = parseFloat((form.elements.namedItem('price') as HTMLInputElement).value);
    const pic = (form.elements.namedItem('pic') as HTMLInputElement).value;
    const category = (form.elements.namedItem('category') as HTMLSelectElement).value as ItemCategory;
    const description = (form.elements.namedItem('description') as HTMLInputElement).value;

    if (!name || !pic || isNaN(price) || !category || !description) {
        alert("All fields are required");
        return;
    }

    const newItem = new Item(category, pic, name, price, description);
    items.push(newItem);
    addGlobalItem(newItem);
    form.reset();

    // Render home page
    homePage();
}
