export class CoffeeItem {
    constructor(
      public id: number,
      public name: string,
      public price: number,
      public quantity: number
    ) {
        this.id = Math.random(),
        this.name = name,
        this.price = price,
        this.quantity = quantity
    }
}
const items: CoffeeItem[] = [];