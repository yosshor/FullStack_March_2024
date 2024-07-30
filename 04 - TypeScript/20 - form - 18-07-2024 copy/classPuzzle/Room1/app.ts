class Coffee {
  name: string;
  type: string;
  size: string;
  extra: string[];

  constructor(name: string, type: string, size: string, extra: string[]) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.extra = extra;
  }
}
const coffees: Coffee[] = [];
function handleAddCoffeeOrder(ev: any) {
  try {
    ev.preventDefault();
    console.log(ev);
    const form = ev.target;
    const name = form.name.value;
    const type = form.coffeeType.value;
    const size = form.size.value;
    const extras: string[] = [];
    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];
      if (element.type === "checkbox" && element.checked) {
        extras.push(element.value);
      }
    }
    const coffee = new Coffee(name, type, size, extras);
    coffees.push(coffee);
    console.log(coffees);
    form.reset();
  } catch (e) {
    console.error("Error:", e);
  }
}
