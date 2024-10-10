import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourlistService {
  private tours: string[] = [];

  constructor() { }

  // TODO GET
  getTours(): string[] {
    return this.tours;
  }

  // TODO ADD
  addTour(tour: string): void {
    this.tours.push(tour);
  }
}
