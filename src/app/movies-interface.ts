import { MovieCard } from "./movie-card-interface";

export interface MoviesInterface {
    entries: number,
    next: string,
    page: number,
    results: MovieCard[]
};