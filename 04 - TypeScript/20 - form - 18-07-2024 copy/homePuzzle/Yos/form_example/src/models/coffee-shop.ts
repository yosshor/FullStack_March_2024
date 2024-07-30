export class OrderedItem {
    type: string;
    name: string;
    milkType: string;
    features: string[];
    sugar: string;
    size: string;
    price: number;
    id: string;

    constructor(type: string, name: string, milkType: string, features: string[],
        sugar: string, size: string, price: number) {
        this.id = crypto.randomUUID();
        this.type = type;
        this.name = name;
        this.milkType = milkType;
        this.features = features;
        this.sugar = sugar;
        this.size = size;
        this.price = price;
        console.log(this);
    }
}

