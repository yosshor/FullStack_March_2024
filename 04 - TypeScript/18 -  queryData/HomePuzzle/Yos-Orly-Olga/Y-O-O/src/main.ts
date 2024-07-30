// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
import { renderCart, renderItems } from './view/item.ts'
import { items } from './model/itemModel'
import './view/dist/item.css'
import { User, calculateTotalPrice } from './model/userModel'
import { renderHeader } from './view/Header.ts'
import { setupCounter } from './counter.ts'


let currentCustomer: User = { name: "Guest", email: "", password: "", itemsInCart: []};
console.log(calculateTotalPrice(currentCustomer))

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(items)

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("remote")) {
        const item = items[Array.from(document.querySelectorAll(".remote")).indexOf(event.target as HTMLElement)];
        currentCustomer.itemsInCart?.splice(currentCustomer.itemsInCart.indexOf(item), 1)
        document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = "0"
        // document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(items)
    }
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("addToCart")) {
        console.log(Array.from(document.querySelectorAll(".addToCart")).indexOf(event.target as HTMLElement))
        const item = items[Array.from(document.querySelectorAll(".addToCart")).indexOf(event.target as HTMLElement)];
        currentCustomer.itemsInCart?.push(item)
        // currentCustomer.itemsInCartDict[item.name] = 1
        // console.log(currentCustomer.itemsInCartDict)
        // setupCounter(document.querySelector<HTMLSpanElement>('#' + item.id)!, item)
        document.querySelector<HTMLSpanElement>('#inCart')!.innerHTML = String(currentCustomer.itemsInCart?.length)
        console.log(item.quantity, Number(document.querySelector<HTMLSpanElement>('#' + item.id)?.innerHTML))
        if (item.quantity > Number(document.querySelector<HTMLSpanElement>('#' + item.id)?.innerHTML)) {
            console.log('true')
            document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = String(Number(document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML) + 1)
        }
        // document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = String(Number(document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML) + 1)

        // document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = "1"
        // document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(items)
            // if (item) {

            //     currentCustomer.itemsInCart?[item['name']] = setupCounter(event.target as HTMLButtonElement)
            //     console.dir(currentCustomer)
            //     // item.quantity = item.quantity + 1
            // }

    }
    // document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(items)
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("cartHeader")) {
        console.log('true')
        console.log(currentCustomer.itemsInCart)

        if (currentCustomer.itemsInCart) {
            document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderCart(currentCustomer)
        }
    }
})

document.addEventListener("click", (event) => {
    console.log(event.target)
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("buy")) {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + "<div class='wrapper'><p>Thank you for your purchase</p><button class='back'>Back to catalog</button></div>"
    }
})