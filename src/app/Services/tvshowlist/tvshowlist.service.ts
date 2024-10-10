import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvshowlistService {
  private tvShows: string[] = [];

  constructor() { }

  // TODO GET
  getTvShows(): string[] {
    return this.tvShows;
  }

  // TODO ADD
  addTvShow(tvShow: string): void {
    this.tvShows.push(tvShow);
  }
}
