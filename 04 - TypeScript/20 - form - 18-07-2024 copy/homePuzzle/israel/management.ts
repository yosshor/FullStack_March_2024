class Product {
    name: string;
    img: string;
    price: number;
    productId: string;

    constructor(name: string, img: string, price: number) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.productId = Math.random().toString(16).slice(2);
    }
}


function renderProduct(product){
const menu = document.querySelector(".menu") as HTMLDivElement;
menu.innerHTML += ` <input type="checkbox" name="${product.name}" id="${product.name}" onchange="handleBorder(this)" style="display: none;" >
        <label class="productLabel" for="${product.name}">
            <img src="${product.img}" alt="${product.name}">
            <div class="details">                
                <p id="productsName" >${product.name}</p>
                <p id="productsPrice">${product.price.toFixed(2)}</p>
            </div>
        </label>`
}



function handleAddProduct(event:any){
    try {
        event.preventDefault();
        console.log(event);

        const form = event.target;
        console.log(form);
        
        const name = form.name.value;
        const img = form.img.value;
        const price = parseFloat(form.price.value);
        const product = new Product(name , img , price);
        console.log(product);      

        renderProduct(product);
    
        newProduct.style.display = "none"
        management.style.display = "block"
        

        
        
    } catch (error) {
        
    }
}

function handleBorder(checkbox){
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    label?.classList.toggle('selected')
}

















//תפיסת האלמנטים של טופס הניהול
const management = document.querySelector("#management") as HTMLButtonElement;
const newProduct = document.querySelector("#newProduct") as HTMLButtonElement;

//פתיחת טופס הוספת מוצר
function handleManagement(event) {
    newProduct.style.display = "block"
    management.style.display = "none"
}



