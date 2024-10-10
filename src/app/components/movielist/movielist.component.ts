import {Component, OnInit} from '@angular/core';
import {MovielistService} from "../../Services/movielist/movielist.service";

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent implements OnInit {
  movieList: string[] = [];
  movieName: string = '';

  constructor(private movieListService: MovielistService) {
  }

  ngOnInit() {
    this.movieList = this.movieListService.getMovies();
  }

  // TODO ADD DATA
  addMovie() {
    console.log(this.movieList);
    this.movieListService.addMovie(this.movieName);
    this.movieName = '';
  }
}
