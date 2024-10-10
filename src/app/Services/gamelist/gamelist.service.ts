import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamelistService {
  private games: string[] = [];

  constructor() { }

  // TODO GET
  getGames(): string[] {
    return this.games;
  }

  // TODO ADD
  addGame(game: string): void {
    this.games.push(game);
  }
}
