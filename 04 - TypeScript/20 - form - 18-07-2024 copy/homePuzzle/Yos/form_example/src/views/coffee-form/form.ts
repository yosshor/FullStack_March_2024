import './dist/coffeeForm.css'
import { handleSubmitEvent } from '../../controllers/formHandler'
import { showItems } from '../../controllers/formHandler'
import { Item } from '../../models/items'
import { addItemIntoStore, handleAddItem } from '../../controllers/addItem'

export function coffeeForm() {
    return `<div class="form-wrapper">
        <div class="wrapper">
            <h1>Coffee Form</h1>
            <div class="form">
                <form action="" id="form" >
                  ${showItems()}
                    <div class="name">
                        <label>Name : </label>
                        <input type="text" for="name" id="name" placeholder="Enter Name">
                    </div>
                    <div class="coffee-type">
                        <label>Milk : </label>
                        <select name="type" id="type" required>
                            <option value="Enter Your Coffee Type" disabled selected>Enter Your Coffee Type</option>
                            <option value="No Milk">No Milk</option>
                            <option value="Whole Milk">Whole Milk</option>
                            <option value="Milk">Milk</option>
                            <option value="Soy Milk">Soy Milk</option>
                            <option value="Oat Milk">Oat Milk</option>
                        </select>
                    </div>
                    <div name="features" class="features">
                        <label>Features : </label>
                        <div class="strong">
                            <label>Strong</label>
                            <input type="checkbox" name="features" id="strong" value="strong">
                        </div>
                        <div class="no-sugar">
                            <label>No Sugar</label>
                            <input type="checkbox" name="features" id="no-sugar" value="no-sugar">
                        </div>

                    </div>
                    <div class="sugar">
                        <label >Sugar :</label>
                        <select name="sugar" id="sugar" required>
                            <option value="How Many Cup Of Sugar" disabled selected>How Many Cup Of Sugar</option>
                            <option value="1 Cup">1 Cup</option>
                            <option value="2 Cup">2 Cup</option>
                        </select>
                    </div>
                    <div class="size">
                        <div class="size-label">
                            <label>Size :</label>
                        </div>
                        <fieldset>
                            <input type="radio" name="size" id="small" value="small">
                            <label for="small">Small</label>
                            <input type="radio" id="medium" name="size" value="medium">
                            <label for="medium">Medium</label>
                            <input type="radio" id="large" name="size" value="large">
                            <label for="large">Large</label>
                        </fieldset>
                    </div>
                    <div class="submit">
                        <button id="submit" type="submit">Submit</button>
                    </div>
                </form>
                <div class="add">
                    <button class="add-item" id="add-item">Add Item</button>
                </div>  
            </div>
        </div>
    </div>`
}

export function showItem(item: Item) {
    return `<div class="img">
           <img src="${item.src}"
              alt="${item.alt}">
              <input value="${item.alt}" type="checkbox"
               name="coffee" id="${item.alt}">
          </div>`
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const add = document.querySelector('#add-item');
    const addItem = document.querySelector('#add-item-button');
    const addItemByClass = document.querySelector('.add-item-button');
    console.log('addItemByClass', addItemByClass);
    if (form) {
        form.addEventListener('submit', handleSubmitEvent);
    }
    if (add) {
        add.addEventListener('click', handleAddItem);
    }
    if (addItem) {
        console.log('addItem', addItem);
        debugger
        addItem.addEventListener('click', addItemIntoStore);
    }
})

const addItemByClass = document.querySelector('.add-item-button');
console.log('addItemByClass', addItemByClass);
if (addItemByClass) {
    console.log('addItem', addItemByClass);
    debugger
    addItemByClass.addEventListener('click', addItemIntoStore);
}
