import { Injectable } from '@angular/core';
import { Observable, catchError, debounceTime, distinctUntilChanged, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MoviesInterface } from './movies-interface';
import emptyMovies from './empty-movies';
import { SearchedMoviesInterface, emptySearchedMovie } from './searched-movies-interface';

@Injectable({
  providedIn: 'root'
})
export class LatestMovieService {

    private upcomingMoviesUrl = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
    private searchUrl = 'https://www.omdbapi.com';
    private httpOptions: object = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accept: 'application/json',
            'X-RapidAPI-Key': environment.apiKey,
            'X-RapidAPI-Host': environment.apiHost
        })
    };
    private searchHttpOptions: object = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accept: 'application/json'
        })
    };

    private empty: MoviesInterface = emptyMovies;
    private emptySearched: SearchedMoviesInterface = emptySearchedMovie;

    constructor(
      private http: HttpClient
    ) { }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
          console.error(error);

          console.log(`${operation} failed: ${error.message}`);

          return of(result as T);
      }
    }

    getMovies(): Observable<MoviesInterface> {
      return this.http.get<MoviesInterface>(this.upcomingMoviesUrl, this.httpOptions)
          .pipe(
              tap(_ => console.log('request successful')),
              catchError(this.handleError<MoviesInterface>('getMovies', this.empty))
          );
    }

    searchMovies(searchParam: string): Observable<SearchedMoviesInterface> {
        if (!searchParam.trim()) {
            return of(this.emptySearched);
        }
        return this.http.get<SearchedMoviesInterface>(`${this.searchUrl}/?s=${searchParam}&apikey=f91ddec1`)
            .pipe(
                debounceTime(1000),
                distinctUntilChanged(),
                catchError(this.handleError<SearchedMoviesInterface>('searchMovies', this.emptySearched))
            )
    }
}
