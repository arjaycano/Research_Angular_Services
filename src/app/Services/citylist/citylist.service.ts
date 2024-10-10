import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitylistService {
  private cities: string[] = [];

  constructor() { }

  // TODO GET
  getCities(): string[] {
    return this.cities;
  }

  // TODO ADD
  addCity(city: string): void {
    this.cities.push(city);
  }
}
