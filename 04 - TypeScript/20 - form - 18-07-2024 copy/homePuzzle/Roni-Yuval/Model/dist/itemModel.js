"use strict";
exports.__esModule = true;
exports.CoffeeItem = void 0;
var CoffeeItem = /** @class */ (function () {
    function CoffeeItem(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.id = Math.random(),
            this.name = name,
            this.price = price,
            this.quantity = quantity;
    }
    return CoffeeItem;
}());
exports.CoffeeItem = CoffeeItem;
var items = [];
