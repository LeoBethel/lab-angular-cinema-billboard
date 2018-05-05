import { Component } from '@angular/core';
import { MovieService } from './movie-service/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(
    public movies: MovieService
  ){}
}
