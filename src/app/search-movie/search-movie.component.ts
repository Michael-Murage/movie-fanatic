import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { LatestMovieService } from '../latest-movie.service';
import { SearchedMoviesInterface, emptySearchedMovie } from '../searched-movies-interface';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit, OnDestroy {

    searchedMovies: SearchedMoviesInterface = emptySearchedMovie;
    empty: SearchedMoviesInterface = emptySearchedMovie;
    searchedMoviesObservable$: Observable<SearchedMoviesInterface> = of(emptySearchedMovie);
    private searchedMoviesSubscription: Subscription = new Subscription();
    private searchTermsString: string = '';
    isLoading: boolean = false;

    constructor(
        private latestMovieService: LatestMovieService
    ) {}

    search(term: string): void {
        if (term.trim()) {
            this.isLoading = true;
        }
        if (!term.trim()) {
            this.isLoading = false;
        }
        if (!term.trim() || term.trim() && term.trim().length < 3){
            return;
        }
        else {
            this.searchTermsString = term;
            this.searchedMoviesObservable$ = this.latestMovieService.searchMovies(this.searchTermsString);
            this.searchedMoviesSubscription = this.searchedMoviesObservable$
                .subscribe(movies => this.searchedMovies = (movies ? movies : this.empty));
        }
    }

    // fetchSearched(term: string): void {
    //     this.searchTermsSubject = this.latestMovieService.searchMovies(term);
    //     this.searchTermsSubject.next(term);
    // }

    ngOnInit(): void {
        
        // console.log(x)
        // this.searchedMoviesObservable$ = this.searchTermsSubject
        //     .pipe(
        //         debounceTime(1000),
        //         distinctUntilChanged(),
        //         switchMap((term: string) => this.latestMovieService.searchMovies(term))
        //     );
        // this.searchedMoviesSubscription = this.searchedMoviesObservable$.subscribe(movies => this.searchedMovies = movies);
    }

    ngOnDestroy(): void {
        this.searchedMoviesSubscription.unsubscribe();
    }
}