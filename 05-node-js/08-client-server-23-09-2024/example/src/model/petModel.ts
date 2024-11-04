export class Pet{
    id:string;
    name:string;
    species:string;
    age:number;
    price:number;
    imageURL?:string;
 
    constructor(name:string,species:string,age:number,price:number, imageURL?:string){
     this.id=crypto.randomUUID();
     this.name=name;
     this.species=species;
     this.age=new Date().getFullYear()-age;
     this.price=price;
     this.imageURL=imageURL;
    }
    setAge(age:number){
        this.age=age;
    }
    setPrice(price:number){
        this.price=price;
    }
    setSpecies(species:string){
        this.species=species;
    }
    setName(name:string){
        this.name=name;
    }
    setImage(image:string){
        this.imageURL=image;
    }
 }
 export const pets:Pet[]=[new Pet('rocky','dog',13,50)];