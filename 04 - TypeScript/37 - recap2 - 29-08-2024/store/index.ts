//model
class Product {
    id: string;
    name: string;
    price: number;
    isEdit: boolean = false;
    constructor(name: string, price: number) {
        this.id = `id-${crypto.randomUUID()}`;
        this.name = name;
        this.price = price;
        this.isEdit = false;
    }
}

const products: Product[] = [];

products.push(new Product('Phone', 500));
products.push(new Product('Tablet', 300));
products.push(new Product('Laptop', 1000));
products.push(new Product('Phone2', 200));
renderProducts(products);

console.log(products);




// products.push(new Product('Laptop',1000));


//create
function handleAddProduct(event: any): void {
    try {
        event.preventDefault(); //prevent the reload of the page
        const form = event.target; //form element
        console.dir(form);
        const name = form.nameOfProduct.value;
        const price = form.priceOfProduct.valueAsNumber;
        if (!name || !price) throw new Error('Please fill all the fields');

        //create a new product
        products.push(new Product(name, price));
        renderProducts(products);
        console.log(products);
        form.reset();
    } catch (error) {
        console.error(error);
    }
}

//view
//render products to the DOM
function renderProducts(products: Product[]): void {
    try {


        const productList = document.getElementById('productList');
        if (!productList) throw new Error('Product list element not found on the DOM');

        let html = '';
        products.forEach(product => {
            html += `
            <div class="productCard">
                <h2 id="h2-${product.id}">${product.name}</h2>
                <p id="p-${product.id}">${product.price}</p>
                <button onclick="handleDeleteProduct('${product.id}')">Delete</button>
                <button onclick="handleStartEdit('${product.id}')" id="s-${product.id}">Edit</button>
            </div>
            `;
        });

        productList.innerHTML = html;
    } catch (error) {
        console.error(error);

    }
}


function renderSum(sum: number): void {
    try {
        const sumElement = document.getElementById('sum');
        if (!sumElement) throw new Error('Sum element not found on the DOM');
        sumElement.textContent = sum.toString();

    } catch (error) {
        console.error(error);

    }
}

//edit
function handleStartEdit(id: string): void {
    try {
        const h2 = document.getElementById(`h2-${id}`);
        const p = document.getElementById(`p-${id}`);
        const btn = document.getElementById(`s-${id}`);
        if (!h2 || !p) throw new Error('Product not found');
        if (!btn) throw new Error('Button not found');

        const product = products.find(product => product.id === id);
        
        if (!product) throw new Error('Product not found');
        if(product.isEdit){
            renderProducts(products);
            product.isEdit = false;
            return;
        }
        product.isEdit = true;
        
        btn.textContent = 'Save';
        h2.innerHTML = `<input type="text" value="${h2.textContent}" id="input-${id}" onkeyup="handleEditNameOfProduct(event, '${id}')">`;
        p.innerHTML = `<input type="number" value="${p.textContent}" id="input-${id}">`;

    } catch (error) {
        console.error(error);
    }
}


//delete
function handleDeleteProduct(id: string): void {
    try {
        const index = products.findIndex(product => product.id === id);
        if (index === -1) throw new Error('Product not found');
        products.splice(index, 1);
        renderProducts(products);

    } catch (error) {
        console.error(error);
    }
}

function bringCheapestProducts(products: Product[], maxPrice: number): Product[] {
    const _products = products.filter(product => product.price <= maxPrice);
    const sum = _products.reduce((acc, product) => acc + product.price, 0);
    renderSum(sum);
    return _products;
}


function handleCheapProducts() {
    const _products = bringCheapestProducts(products, 400);
    renderProducts(_products);
}

function handleAllProducts() {
    renderProducts(products);
}

function handleGetSum() {
    const sum = products.reduce((acc, product) => acc + product.price, 0);
    renderSum(sum);

}

function handleEditNameOfProduct(event, id: string) {
    try {
        const nameOfProduct = event.target.value;
        const index = products.findIndex(product => product.id === id);
        if (index === -1) throw new Error('Product not found');
        products[index].name = nameOfProduct;
        console.log(products);
    } catch (error) {

    }
}

