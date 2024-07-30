import { Player } from "../players/playersModel";

export class Game{
    id:string;
    players:Player[];

    constructor( players:Player[]){
        this.players = players;
        this.id = crypto.randomUUID();
    }
}