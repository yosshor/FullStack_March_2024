export class Movie{
    id:string;
    title:string = "";
    actorsId:string[] = []; //the list of actors ids that participated in the movie
    directorId:string = "";
    year:number = 0;

    constructor(id: string, title:string, actorsId:string[], directorId:string, year:number){
        this.id = id;
        this.title = title;
        this.actorsId = actorsId;
        this.directorId = directorId;
        this.year = year;
    }
}

export const movies: Movie[] = [
    new Movie("1","Mission Impossible", ["1", "2"], "1", 1996),
    new Movie("2","Fight Club", ["2", "3"], "2", 1999),
    new Movie("3","Mr. & Mrs. Smith", ["1", "3"], "3", 2005),
];