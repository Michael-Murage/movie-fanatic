import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LatestMovieComponent } from './latest-movie/latest-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SuggestMovieComponent } from './suggest-movie/suggest-movie.component';

const routes: Routes = [
    { path: 'auth/login', component: LoginComponent },
    { path: 'latest', component: LatestMovieComponent },
    { path: 'search', component: SearchMovieComponent},
    { path: 'suggest', component: SuggestMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
