import "./style.scss";
import { getMainTag } from "../../general/functions";
import {
  handelItemOver,
  handelItemOut,
  handelItemClick,
  handelUpdateItem,
  handleUpdateItem,
} from "../../controller/adminController";
// import "../home/homeView";

export function handelAdmin() {
  try {
    let mainTag: HTMLDivElement = getMainTag("#main");
    let inventory = JSON.parse(localStorage.getItem("coffee"));
    let htmlTags: string = inventory.map((item) => renderItems(item)).join("");
    mainTag.innerHTML =
      `
 
    <div class="inventory">` +
      htmlTags +
      `</div>`;
    mainTag
      .querySelectorAll(".item")
      .forEach((item) =>
        item.addEventListener("mouseover", () => handelItemOver(item.id))
      );
    mainTag
      .querySelectorAll(".item")
      .forEach((item) =>
        item.addEventListener("mouseout", () => handelItemOut(item.id))
      );
    mainTag
      .querySelectorAll(".item")
      .forEach((item) =>
        item.addEventListener("click", () => handelItemClick(item.id))
      );
    mainTag
      .querySelectorAll(".add")
      .forEach((item) =>
        item.addEventListener("click", () => handelUpdateItem(item.id))
      );
  } catch (error) {
    console.error(error);
  }
}

function renderItems(item: string[]): string {
  let htmlTags: string = `
  <div class="item" id="item-${item.id}">
  <div><input type="radio" class="add" id="${item.id}" name="item"></div>
  <div>${item.name}</div>
  <div>${item.price}</div>
  <div>${item.quantity}</div></div>
  `;
  return htmlTags;
}

export function renderUpdateForm(id: string) {
  //create new form element
  let mainTag: HTMLDivElement = getMainTag("#main");
  let htmlForm = document.createElement("form");
  mainTag.parentNode?.insertBefore(htmlForm, mainTag.nextSibling);
//   const formId: string = crypto.randomUUID();
//   htmlForm.setAttribute("id", `inv-${formId}`);
  //htmlForm.setAttribute("onsubmit","handleUpdateItem(event)")
  let inventory = JSON.parse(localStorage.getItem("coffee"));
  const item = inventory.filter((e) => e.id === id);

  //render html form with content
  if (item.length === 1) {
    let htmlTags: string = `
    <div id="${item[0].id}">
    <div><label>Name: </label><input type='text' name="name" value="${item[0].name}"></div>
    <div><label>Price: </label><input type='number' name="price" value="${item[0].price}"></div>
    <div><label>Quantity: </label><input type='number'name="quantity" value="${item[0].quantity}"></div>
    <button type="submit">Submit</button>
    </div>
    `;
    htmlForm.innerHTML = htmlTags;
    htmlForm.addEventListener("submit",handleUpdateItem);
  }
  //create a submit button
}
