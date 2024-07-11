import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { showItems } from './controllers/showItems.ts'
import { showUsers } from './controllers/showUsers.ts'

// var app = document.querySelector<HTMLDivElement>('#app')!
// app.appendChild(showItems()!);

var app = document.querySelector<HTMLDivElement>('#app')!.innerHTML = showUsers() //showItems()!;
