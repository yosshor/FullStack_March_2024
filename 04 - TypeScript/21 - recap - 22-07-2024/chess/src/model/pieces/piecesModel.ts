import { pawn, Position, Type } from "../types/typesModel";

export class Piece{
    id:string;
    color:"black"|"white";
    position:Position;
    type:Type

    constructor(color:"black"|"white", position:Position, type:Type){
        this.id = crypto.randomUUID()
        this.position = position;
        this.color = color;
        this.type = type;
    }

    // method: setNewPostion("pos-0b") ->  new position
}

export const pieces:Piece[] = [];



const pawn1 = new Piece("black",new Position(3,5),pawn )
pieces.push(pawn1)