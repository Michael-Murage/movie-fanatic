import { Component, Input } from '@angular/core';
import { MovieCard } from '../movie-card-interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
    @Input() data: MovieCard[] = [];
}
