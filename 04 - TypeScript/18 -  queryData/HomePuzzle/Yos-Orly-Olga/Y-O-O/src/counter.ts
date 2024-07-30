import { Item } from "./model/itemModel";

export function setupCounter(element: HTMLSpanElement, item: Item) {
  let counter = 0;
  const setCounter = (count: number) => {
    if (item.quantity > count) {
      counter = count;
      element.innerHTML = `${counter}`;
    }
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
