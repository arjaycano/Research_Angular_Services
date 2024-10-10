import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrylistService {
  private countries: string[] = [];

  constructor() { }

  // TODO GET
  getCountries(): string[] {
    return this.countries;
  }

  // TODO ADD
  addCountry(country: string): void {
    this.countries.push(country);
  }
}
