export class Task {
    id: string;
    name: string;
    done: boolean;
    description: string;

    constructor(name: string, description: string) {
        this.done = false;
        this.name = name;
        this.id = crypto.randomUUID();
        this.description = description;
    }

} 

export const tasksList:Task[] = [];