import { Injectable } from '@angular/core';
import moviesList, {Movie} from '../movie-service/movies-list';

@Injectable()
export class MovieService {
  moviesList: Array<Movie> = [...moviesList];
  constructor() { }

  getMovies(){
    return this.moviesList;
  }
  getMovie(id: number){
    console.log("id -->"+id)
    return this.moviesList.find(m => m.id === id);
  }
}
