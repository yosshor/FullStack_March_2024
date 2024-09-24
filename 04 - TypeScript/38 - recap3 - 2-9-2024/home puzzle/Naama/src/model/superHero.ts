export class SuperHero {
    id: string;
    name: string;
    powers: string[];
    imageurl: string;
    position: { x: number, y: number };

    constructor(name: string, powers: string[], imageurl: string, position: { x: number, y: number }) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.powers = powers;
        this.imageurl = imageurl;
        this.position = position;
    }
}

export const heros: SuperHero[] = [
    new SuperHero("bob", ["flight", "invisibility"], "https://cdn.pixabay.com/photo/2024/05/19/18/11/ai-generated-8773076_640.png", { x: 3, y: 5 }),
    new SuperHero("stella", ["super strength", "super speed", "super hearing"], "https://media.istockphoto.com/id/916664406/vector/superhero-woman-in-flight-attractive-young-caucasian-woman-wearing-superhero-costume-with.jpg?s=612x612&w=0&k=20&c=g7EtJUVF2aW7TTE56c-EeS91IRn6pK1lkt9GUvtfQyc=", { x: 5, y: 3 })
];