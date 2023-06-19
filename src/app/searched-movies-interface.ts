interface search {
    Poster: string | "N/A",
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export interface SearchedMoviesInterface {
    Search: search[],
    Response: string
};

export const emptySearchedMovie: SearchedMoviesInterface = {
    Response: 'true',
    Search: []
};