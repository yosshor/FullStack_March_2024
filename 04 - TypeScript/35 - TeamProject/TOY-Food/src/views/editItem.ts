import { Item, ItemCategory } from "../models/Item";
import '../styles/delete-edit-item.scss';

export function editItemPage(item: Item): string {
    const editItemPage = `
    <div class="update-item">
        <div class="edit-wrapper">
            <div class="editItem">
                <div class="form-wrapper-update">
                    <div class="title">
                        <h1>Edit Item</h1>
                    </div>
                    <form class="update-item-form" id="${item.id}">
                        <div class="name">
                            <label>Name : </label>
                            <input type="text" name="name" id="name" value="${item.name}">
                        </div>
                        <div class="price">
                            <label>Price : </label>
                            <input type="number" name="price" id="price" value="${item.price}">
                        </div>  
                        <div class="pic">
                            <label>Picture Url : </label>
                            <input type="text" name="pic" id="pic" value="${item.pic}">
                        </div>
                        <div class="description">
                            <label>Description : </label>
                            <input type="text" name="description" id="description" value="${item.description}">
                        </div>
                        <div class="category">
                            <label>Category : </label>
                            <select name="category" id="category">
                            <option value="${item.category}">${item.category}</option>
                            ${Object.values(ItemCategory).map(category => 
                                category !== item.category ? `<option value="${category}">${category}</option>` : '')
                            .join('')}
                            </select>
                        </div>
                        <button style="background-color: lightgreen;color: black;" id="update-item" type="submit">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>`;
    return editItemPage;
}
