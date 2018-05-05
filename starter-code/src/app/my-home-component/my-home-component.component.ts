import { Component, OnInit } from '@angular/core';
import moviesList, {Movie} from '../movie-service/movies-list';
import { MovieService } from '../movie-service/movie.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<Movie> = moviesList;
  constructor(
    public movieServ: MovieService
  ) { }

  ngOnInit() {
  }

}
