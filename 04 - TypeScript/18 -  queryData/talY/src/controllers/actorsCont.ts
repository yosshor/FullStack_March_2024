//find all the movies that the actor participated in

import { Actor} from "../model/actorsModel";
import { Movie } from "../model/movieModel";

export function getActorMovies(actor: Actor, movies: Movie[]): Movie[] {
    try {
        let actorMoviesId = actor.moviesId;

        //get the movies that the actor participated in
        let actorMovies: Movie[] = movies.filter((movie) => {
            return actorMoviesId.includes(movie.id);
        });

        return actorMovies;

    } catch (error) {
        console.error(error);
        return [];
    }
}

