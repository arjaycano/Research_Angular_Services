import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitlistService {
  private fruits: string[] = [];

  constructor() { }

  // TODO GET
  getFruits(): string[] {
    return this.fruits;
  }

  // TODO ADD
  addFruit(fruit: string): void {
    this.fruits.push(fruit);
  }
}
