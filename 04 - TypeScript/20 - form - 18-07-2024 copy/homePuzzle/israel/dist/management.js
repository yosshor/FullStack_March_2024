var Product = /** @class */ (function () {
    function Product(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.productId = Math.random().toString(16).slice(2);
    }
    return Product;
}());
function renderProduct(product) {
    var menu = document.querySelector(".menu");
    menu.innerHTML += " <input type=\"checkbox\" name=\"" + product.name + "\" id=\"" + product.name + "\" onchange=\"handleBorder(this)\" style=\"display: none;\" >\n        <label class=\"productLabel\" for=\"" + product.name + "\">\n            <img src=\"" + product.img + "\" alt=\"" + product.name + "\">\n            <div class=\"details\">                \n                <p id=\"productsName\" >" + product.name + "</p>\n                <p id=\"productsPrice\">" + product.price.toFixed(2) + "</p>\n            </div>\n        </label>";
}
function handleAddProduct(event) {
    try {
        event.preventDefault();
        console.log(event);
        var form = event.target;
        console.log(form);
        var name = form.name.value;
        var img = form.img.value;
        var price = parseFloat(form.price.value);
        var product = new Product(name, img, price);
        console.log(product);
        renderProduct(product);
        newProduct.style.display = "none";
        management.style.display = "block";
    }
    catch (error) {
    }
}
function handleBorder(checkbox) {
    var label = document.querySelector("label[for=\"" + checkbox.id + "\"]");
    label === null || label === void 0 ? void 0 : label.classList.toggle('selected');
}
//תפיסת האלמנטים של טופס הניהול
var management = document.querySelector("#management");
var newProduct = document.querySelector("#newProduct");
//פתיחת טופס הוספת מוצר
function openManagementPage(event) {
    newProduct.style.display = "block";
    management.style.display = "none";
}
//סגירת טופס הוספת מוצר
function addNewProduct(event) {
    console.log("jjj");
    newProduct.style.display = "none";
    management.style.display = "block";
}
