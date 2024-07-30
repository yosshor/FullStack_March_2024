"use strict";
exports.__esModule = true;
exports.adminView = void 0;
var adminView = /** @class */ (function () {
    function adminView(containerId) {
        this.container = document.getElementById(containerId);
    }
    adminView.prototype.render = function (items) {
        this.container.innerHTML = '';
        this.renderAddItemForm();
        this.renderItemList(items);
    };
    adminView.prototype.renderAddItemForm = function () {
        var form = document.createElement('form');
        form.id = 'addItemForm';
        form.innerHTML = "\n          <h2>Add New Item</h2>\n          <input type=\"text\" name=\"name\" placeholder=\"Item Name\" required>\n          <input type=\"number\" name=\"price\" placeholder=\"Price\" step=\"0.01\" required>\n          <input type=\"number\" name=\"quantity\" placeholder=\"Quantity\" required>\n          <button type=\"submit\">Add Item</button>\n        ";
        this.container.appendChild(form);
    };
    adminView.prototype.renderItemList = function (items) {
        var itemList = document.createElement('div');
        itemList.innerHTML = '<h2>Manage Items</h2>';
        items.forEach(function (item) {
            var itemElement = document.createElement('div');
            itemElement.innerHTML = "\n            <input type=\"text\" value=\"" + item.name + "\" data-id=\"" + item.id + "\" class=\"item-name\">\n            <input type=\"number\" value=\"" + item.price + "\" data-id=\"" + item.id + "\" class=\"item-price\" step=\"0.01\">\n            <input type=\"number\" value=\"" + item.quantity + "\" data-id=\"" + item.id + "\" class=\"item-quantity\">\n            <button data-id=\"" + item.id + "\" class=\"delete-item\">Delete</button>\n          ";
            itemList.appendChild(itemElement);
        });
        this.container.appendChild(itemList);
    };
    return adminView;
}());
exports.adminView = adminView;
