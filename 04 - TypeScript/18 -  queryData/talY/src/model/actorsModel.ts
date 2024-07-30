export class Actor {
   id:string;
    name: string;
    yearOfBirth: number;
    moviesId: string[];

    constructor(id:string, name: string, yearOfBirth: number, moviesId: string[]) {
        this.id = id;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.moviesId = moviesId;
    }
}

export const actors: Actor[] = [
    new Actor("1","Tom Cruise", 1962, ["1", "2"]),
    new Actor("2", "Brad Pitt", 1963, ["2", "3"]),
    new Actor("3", "Angelina Jolie", 1975, ["1", "3"]),
];