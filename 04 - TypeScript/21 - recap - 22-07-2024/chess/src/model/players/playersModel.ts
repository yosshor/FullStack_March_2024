export class Player {
    id: string;
    name: string;
    imageUrl: string;
    wins: number;

    constructor( name:string, imageUrl:string, wins:number){
        this.id = crypto.randomUUID();
        this.imageUrl = imageUrl;
        this.name = name;
        this.wins = wins;

    }
}