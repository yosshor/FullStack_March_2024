export class Position{
    x:number
    y:number
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}
export class Type{
    id:string;
    imageUrl:string;
    name:string;
  

    constructor(imageUrl:string, name:string){
        this.id = crypto.randomUUID();
        this.imageUrl = imageUrl;
        this.name = name;
    

    }
}

export const pawn = new Type("https://png.pngtree.com/png-vector/20210702/ourmid/pngtree-black-chess-pawn-png-image_3539520.jpg","pawn")