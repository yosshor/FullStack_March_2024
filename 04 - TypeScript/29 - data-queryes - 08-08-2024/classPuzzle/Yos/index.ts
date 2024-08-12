
class Product {
    name: string;
    price: number;
    id: string;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}


const products: Product[] = []
const pen: Product = new Product("Pen", 5);
const pencil: Product = new Product("Pencil", 3);


class Customer {
    name: string;
    id: string;
    cart: Product[] = [];

    constructor(name: string, cart: Product) {
        this.name = name;
        this.id = Math.random().toString(16).slice(2);
        this.cart.push(cart);
    }


    getCart() {
        return this.cart;
    }

    getProductAbovePrice(price:number){
        return this.cart.filter(p => p.price > price)
    }
}

const customers: Customer[] = []

renderHomePage();


function renderHomePage() {
    try {
        const app = document.getElementById("customer") as HTMLDivElement;

        if (app) {
            const html = `
            <h1>Customer</h1>
            <form id="customerDetails">
                <input type="text" name="name" placeholder="Enter your name" required>
                <input name="productName" type="text" placeholder="Enter your product Name">
                <input name="productPrice" type="text" placeholder="Enter your product Price">
                <button type="submit">Submit</button>
            </form>
            `;
            app.innerHTML = html;
            const form = document.getElementById("customerDetails") as HTMLFormElement;
            if (form) form.addEventListener("submit", handleCustomerDetails);
        }
    } catch (error) {
        console.log(error);
    }
}


function handleCustomerDetails(event: any): void {
    try {
        event.preventDefault();
        const userName: string = event.target.name.value;
        const productName: string = event.target.productName.value;
        const productPrice: number = event.target.productPrice.value;
        console.log(userName, productName, productPrice)

        const customer: Customer = new Customer(userName, new Product(productName, productPrice));
        customers.push(customer);
        console.dir(customer)


        event.target.reset();
        insertCustomerIntoLS();

    } catch (error) {
        console.error(error)
    }
}


function insertCustomerIntoLS(): void {
    try {
        const customersJson = JSON.stringify(customers);
        sessionStorage.setItem("customers", customersJson);
        console.log(sessionStorage.getItem("customers"));
        showCustomers();


    } catch (error) {
        console.error(error);
    }
}

function showCustomers() {
    try {
        let customers: Customer[] = [];
        const customersJson = JSON.parse(sessionStorage.getItem("customers") as string);
        customersJson.forEach(customer => {
            customers.push(new Customer(customer.name, customer.cart));
        });
        console.log(customers)
    } catch (error) {
        console.error(error);
    }
}