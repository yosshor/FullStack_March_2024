class Order {
    orderId:string;
    items: string[];
    type: string;
    customer: string;

    constructor( items:string[], type:string, customer:string){
        this.orderId = Math.random().toString(),
        this.items = items,
        this.type = type,
        this.customer = customer
    }
}