import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { LatestMovieComponent } from './latest-movie/latest-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SuggestMovieComponent } from './suggest-movie/suggest-movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { SwahiliConvertPipe } from './swahili-convert.pipe';
import { SkeletonCardLoaderComponent } from './skeleton-card-loader/skeleton-card-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LogoComponent,
    LatestMovieComponent,
    SearchMovieComponent,
    SuggestMovieComponent,
    MovieCardComponent,
    LoaderComponent,
    SwahiliConvertPipe,
    SkeletonCardLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
