import "./style.scss";
import { getMainTag } from "../../general/functions";
import { handelAdmin } from '../admin/adminView'

export function renderHome() {
  const htmlTags: string = `<div class='home-container'>
   <div class="home-buttons">
   <button class="btn home-buttons--admin">Admin</button>
   <button class="btn home-buttons--shop">Order</button>
   </div>
   </div>`;

  let mainTag: HTMLDivElement = getMainTag("#main");
  mainTag.innerHTML = htmlTags;
  mainTag.querySelector('.home-buttons--admin')?.addEventListener('click',handelAdmin)

  localStorage.setItem('coffee',JSON.stringify([
    {id: "1",name:"Espresso","price": 100,"quantity" :30},
    {id: "2",name:"Late","price": 101,"quantity" :31},
    {id: "3",name:"Cappuccino","price": 102,"quantity" :32},
    {id: "4",name:"Americano","price": 103,"quantity" :33},
    {id: "5",name:"Tea","price": 104,"quantity" :34},
  ]));
}
