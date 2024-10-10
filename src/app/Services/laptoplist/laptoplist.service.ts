import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptoplistService {
  private laptops: string[] = [];

  constructor() { }

  // TODO GET
  getLaptops(): string[] {
    return this.laptops;
  }

  // TODO ADD
  addLaptop(laptop: string): void {
    this.laptops.push(laptop);
  }
}
