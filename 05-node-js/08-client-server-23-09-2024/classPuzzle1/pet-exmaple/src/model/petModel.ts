export class Pet{
    id:string;
    name:string;
    species:string;
    age:number;
    price:number;
    imageURL?:string;
 
    constructor(name:string,species:string,age:number,price:number, imageUrl?:string){
     this.id=crypto.randomUUID();
     this.name=name;
     this.species=species;
     this.age=new Date().getFullYear()-age;
     this.price=price;
     this.imageURL=imageUrl ?? '';
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

 export const pets:Pet[]=[new Pet('rocky','dog',13,50,"https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_640.jpg"),
    new Pet('kitty','cat',5,30,"https://t4.ftcdn.net/jpg/02/26/53/33/360_F_226533348_TiIz0m2dU4dBXC6yFJrNOfXfh5YcEecY.jpg"),
    new Pet('bunny','rabbit',2,20, "https://t3.ftcdn.net/jpg/04/81/85/46/360_F_481854656_gHGTnBscKXpFEgVTwAT4DL4NXXNhDKU9.jpg"),
    new Pet('fluffy','dog',4,40,"https://img.freepik.com/premium-photo/dog-cat-are-laying-rug-with-dog-pet-care-hd-quality-image-website_1286196-1697.jpg"),
    new Pet('bella','cat',3,30,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2q03WBtyTfE9IuUPg0rCFsnN7fs2xCpyeuEDewbrruhTjnaRCFJidkaWhIb4AyS1d60&usqp=CAU"),
 ];