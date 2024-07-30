//get movie's actors

import { Actor } from "../model/actorsModel";
import { Movie } from "../model/movieModel";

export function getMovieActors(movie: Movie, actors: Actor[]): Actor[] {
    try {
        //get actors ids from the movie
        const actorsId = movie.actorsId;
        const movieActors = actors.filter(actor => actorsId.includes(actor.id));
        return movieActors
    } catch (error) {
        console.error(error);
        return [];
    }
}