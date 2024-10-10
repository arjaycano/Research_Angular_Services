import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportslistService {
  private sports: string[] = [];

  constructor() { }

  // TODO GET
  getSports(): string[] {
    return this.sports;
  }

  // TODO ADD
  addSport(sport: string): void {
    this.sports.push(sport);
  }
}
