export class Task{
    id:string;
    description:string;
    done:boolean;

    constructor( description:string){
        this.id = crypto.randomUUID();
        this.description = description;
        this.done = false;
    }
}

export const  tasks:Task[] = [];