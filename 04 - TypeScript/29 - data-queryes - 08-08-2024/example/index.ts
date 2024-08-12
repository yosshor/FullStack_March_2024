class Product {
    name: string;
    price: number;
    dateOfPurchase: Date;
    id:string;
    customerIds:string[] = [];
    constructor(name:string, price:number, dateOfPurchase:Date) {
        this.name = name;
        this.price = price;
        this.dateOfPurchase = dateOfPurchase;
        this.id = Math.random().toString(16).slice(2);
    }
}

const products:Product[] = []

function getProductsByBoughtBefore(date:Date) {
    return products.filter(p => p.dateOfPurchase < date && p.customerIds.length > 0)
}



//get all products bought by a customer
function getProductsByCustomer(customerId:string) {
    return products.filter(p => p.customerId === customerId)
}

class Customer {
    name: string;
    id:string;
    cart:Product[] = []
    constructor(name:string) {
        this.name = name;
        this.id = Math.random().toString(16).slice(2);
    } 

    addProduct(product:Product) {
        this.products.push(product)
    }
    deleteProduct(productId:string) {
        this.products = this.products.filter(p => p.id !== productId)
    }

    getProduct(productId:string) {
        return this.products.find(p => p.id === productId)
    }

    getProductsAboveSum(sum:number) {
        return this.products.filter(p => p.price > sum)
    }


}

const customers:Customer[] = []

const customer1 = new Customer('John Doe')
const customer2 = new Customer('Jane Doe')

const laptop = new Product('Laptop', 1000)
const product2 = new Product('Phone', 500)
const product3 = new Product('Tablet', 300)

customer1.addProduct(laptop)

// how to store all the products each customer has bought

// how to get all the products above a certain price

// get all products bought last month