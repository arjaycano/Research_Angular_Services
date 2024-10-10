import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerlistService {
  private flowers: string[] = [];

  constructor() { }

  // TODO GET
  getFlowers(): string[] {
    return this.flowers;
  }

  // TODO ADD
  addFlower(flower: string): void {
    this.flowers.push(flower);
  }
}
