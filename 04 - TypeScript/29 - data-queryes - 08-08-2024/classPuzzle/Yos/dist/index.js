var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
    return Product;
}());
var products = [];
var pen = new Product("Pen", 5);
var pencil = new Product("Pencil", 3);
var Customer = /** @class */ (function () {
    function Customer(name, cart) {
        this.cart = [];
        this.name = name;
        this.id = Math.random().toString(16).slice(2);
        this.cart.push(cart);
    }
    Customer.prototype.getCart = function () {
        return this.cart;
    };
    Customer.prototype.getProductAbovePrice = function (price) {
        return this.cart.filter(function (p) { return p.price > price; });
    };
    return Customer;
}());
var customers = [];
renderHomePage();
function renderHomePage() {
    try {
        var app = document.getElementById("customer");
        if (app) {
            var html = "\n            <h1>Customer</h1>\n            <form id=\"customerDetails\">\n                <input type=\"text\" name=\"name\" placeholder=\"Enter your name\" required>\n                <input name=\"productName\" type=\"text\" placeholder=\"Enter your product Name\">\n                <input name=\"productPrice\" type=\"text\" placeholder=\"Enter your product Price\">\n                <button type=\"submit\">Submit</button>\n            </form>\n            ";
            app.innerHTML = html;
            var form = document.getElementById("customerDetails");
            if (form)
                form.addEventListener("submit", handleCustomerDetails);
        }
    }
    catch (error) {
        console.log(error);
    }
}
function handleCustomerDetails(event) {
    try {
        event.preventDefault();
        var userName = event.target.name.value;
        var productName = event.target.productName.value;
        var productPrice = event.target.productPrice.value;
        console.log(userName, productName, productPrice);
        var customer = new Customer(userName, new Product(productName, productPrice));
        customers.push(customer);
        console.dir(customer);
        event.target.reset();
        insertCustomerIntoLS();
    }
    catch (error) {
        console.error(error);
    }
}
function insertCustomerIntoLS() {
    try {
        var customersJson = JSON.stringify(customers);
        sessionStorage.setItem("customers", customersJson);
        console.log(sessionStorage.getItem("customers"));
        showCustomers();
    }
    catch (error) {
        console.error(error);
    }
}
function showCustomers() {
    try {
        var customers_1 = [];
        var customersJson = JSON.parse(sessionStorage.getItem("customers"));
        customersJson.forEach(function (customer) {
            customers_1.push(new Customer(customer.name, customer.cart));
        });
        console.log(customers_1);
    }
    catch (error) {
        console.error(error);
    }
}
