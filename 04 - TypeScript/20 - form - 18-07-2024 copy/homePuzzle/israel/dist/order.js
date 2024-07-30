var Order = /** @class */ (function () {
    function Order(items, type, customer) {
        this.orderId = Math.random().toString(),
            this.items = items,
            this.type = type,
            this.customer = customer;
    }
    return Order;
}());
