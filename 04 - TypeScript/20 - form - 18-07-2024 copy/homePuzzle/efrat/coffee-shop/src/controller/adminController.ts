import { getMainTag } from "../general/functions";
import { renderUpdateForm } from "../view/admin/adminView";

//highlight row
export function handelItemOver(id: string) {
  try {
    let mainTag: HTMLDivElement = getMainTag("#main");
    let element = mainTag.querySelector(`#${id}`);
    element?.setAttribute("class", "item highlight");
  } catch (error) {
    console.error(error);
  }
}
//remove highlight
export function handelItemOut(id: string) {
  try {
    let mainTag: HTMLDivElement = getMainTag("#main");
    let element = mainTag.querySelector(`#${id}`);
    element?.setAttribute("class", "item");
  } catch (error) {
    console.error(error);
  }
}

export function handelItemClick(id: string) {
  try {
  } catch (error) {
    console.error(error);
  }
}

export function handelUpdateItem(id: string) {
  try {
    //remove for if exists in html

    let mainTag: HTMLDivElement = getMainTag("#item-form");
    if (mainTag) {
      mainTag.remove();
    }
    renderUpdateForm(id);
  } catch (error) {
    console.log(error);
  }
}


export function handleUpdateItem(ev: Event){
   try {
    ev.preventDefault();
    console.log(ev)
    const form = ev.target;
    const name = form.name.value;
    const price = form.price.valueAsNumber;
    const quantity = form.quantity.valueAsNumber;
    //add to local storage
    // console.log(form.children[0].id);
     
   } catch (error) {
    console.error(error);
   }
    
    
    
}