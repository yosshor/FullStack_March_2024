import { addItemIntoStore } from '../../controllers/addItem';
import './dist/coffeeForm.css';
import { coffeeForm } from './form';

export function addItem() {
    return `<div class="form-wrapper">
        <div class="wrapper">
            <h1>Add Item</h1>
            <form id="add-item-form" class="form">
                <div class="name">
                    <label>Item Name : </label>
                    <input type="text" for="name" id="name" placeholder="Enter Item Name">
                </div>
                <div class="alt">
                    <label>Alt Name : </label>
                    <input type="text" for="alt" id="alt" placeholder="Enter Alt Name">
                </div>
                <div class="price">
                    <label>Price : </label>
                    <input type="number" for="price" id="price" placeholder="Enter price Name">
                </div>
                <div class="Image Url">
                    <label>Image Url : </label>
                    <input type="text" for="imageUrl" id="imageUrl" placeholder="Enter Image Url">
                </div>
                <div class="submit">
                    <button type="submit" class="add-item-button" id="add-item-button">Submit</button>
                </div>
            </form>
        </div>
    </div>`;
}

function handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted');
    addItemIntoStore(event);
}

// Ensure event listener is added after the form is in the DOM
document.addEventListener('DOMContentLoaded', () => {
    function attachEventListeners() {
        const form = document.querySelector('#add-item-form');
        if (form) {
            console.log('Form found, attaching submit event listener');
            form.addEventListener('submit', handleSubmit);
        } else {
            console.log('Form not found, will try again');
        }
    }

    // Use MutationObserver to detect when content is added to the DOM
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                attachEventListeners();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial call in case the form is already in the DOM
    attachEventListeners();
});
