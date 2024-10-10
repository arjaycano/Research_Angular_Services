import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  private movies: string[] = [];

  constructor() { }

  // TODO GET
  getMovies(): string[] {
    return this.movies;
  }

  // TODO ADD
  addMovie(movie: string): void {
    this.movies.push(movie);
  }
}
