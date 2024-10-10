import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistlistService {
  private artists: string[] = [];

  constructor() { }

  // TODO GET
  getArtists(): string[] {
    return this.artists;
  }

  // TODO ADD
  addArtist(artist: string): void {
    this.artists.push(artist);
  }
}
