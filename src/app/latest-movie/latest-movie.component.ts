import { Component, OnDestroy, OnInit } from '@angular/core';
import { LatestMovieService } from '../latest-movie.service';
import { MoviesInterface } from '../movies-interface';
import emptyMovies from '../empty-movies';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-latest-movie',
  templateUrl: './latest-movie.component.html',
  styleUrls: ['./latest-movie.component.css']
})
export class LatestMovieComponent implements OnInit, OnDestroy {
    movies: MoviesInterface = emptyMovies;
    private fetchedMovies$: Observable<MoviesInterface> = of(emptyMovies);
    private subscription: Subscription = new Subscription();

    constructor(
        private latestMovieService: LatestMovieService
    ) {}

    fetchLatest(): void {
        this.fetchedMovies$ = this.latestMovieService.getMovies();
    }

    ngOnInit(): void {
        this.fetchLatest();
        this.subscription = this.fetchedMovies$
            // .pipe(takeUntil(this.destroy$))
            .subscribe(movies => this.movies = movies);
    }

    ngOnDestroy(): void {
        // this.destroy$.next(null);
        // this.destroy$.complete();
        this.subscription.unsubscribe();
    }
}
