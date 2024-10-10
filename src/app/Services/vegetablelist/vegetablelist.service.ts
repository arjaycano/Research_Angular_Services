import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VegetablelistService {
  private vegetables: string[] = [];

  constructor() { }

  // TODO GET
  getVegetables(): string[] {
    return this.vegetables;
  }

  // TODO ADD
  addVegetable(vegetable: string): void {
    this.vegetables.push(vegetable);
  }
}
