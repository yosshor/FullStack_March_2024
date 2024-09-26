
export class Pet {
    id: string;
    name: string;
    species: string;
    age: number;
    price: number;
    yearOfBirth: number;
    imageUrl?: string;
    constructor(name: string, species: string, age: number, price: number, id?: string, imageUrl?: string) {
        this.id = id ?? crypto.randomUUID();
        this.name = name;
        this.species = species;
        this.age = age;
        this.price = price;
        this.yearOfBirth = new Date().getFullYear() - age;
    }
}

export const pets: Pet[] = [
    new Pet('Tom', 'Cat', 2, 100),
    new Pet('Jerry', 'Mouse', 1, 50),
    new Pet('Spike', 'Dog', 3, 200),
    new Pet('Tweety', 'Bird', 1, 150),
    new Pet('Daffy', 'Duck', 2, 100),
    new Pet('Bugs', 'Bunny', 1, 50),
];


module.exports = { Pet, pets };