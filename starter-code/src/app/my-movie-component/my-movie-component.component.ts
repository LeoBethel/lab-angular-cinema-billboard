import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service/movie.service';
import moviesList, {Movie} from '../movie-service/movies-list';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId: string;
  movieInfo: Movie; 
  
  constructor(
    
    private reqThang: ActivatedRoute,
    public newMovie: MovieService,
    private resThang: Router
  ) { }

  ngOnInit() {
    this.reqThang.paramMap.subscribe(myParams => {
      console.log("myParams --> "+myParams)
      this.movieId = myParams.get("id");
      let numMovieId= Number(this.movieId)            
      this.movieInfo = this.newMovie.getMovie(numMovieId)
      console.log("movieInfo actor-->:"+this.movieInfo.actors)
    })    
  }

}
