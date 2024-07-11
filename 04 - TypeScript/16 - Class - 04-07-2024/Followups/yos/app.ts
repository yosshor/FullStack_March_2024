interface Position {
    top: string | null;
    left: string | null;
}


class Pet {
    id: string;
    name: string;
    price: number;
    description: string;
    age: number;
    src: string;
    position: Position | undefined;

    constructor(name: string, src: string, description: string, age: number, price: number) {
        this.name = name;
        this.src = src;
        this.description = description;
        this.age = age;
        this.price = price;
        this.position = this.getPosition();
    }
    
    getPosition(): Position | undefined {
        try {
            return { top: `${Math.random()*100}vh`, left: `${Math.random()*100}vh` }
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

}