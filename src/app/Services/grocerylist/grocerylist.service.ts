import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrocerylistService {
  private groceries: string[] = [];

  constructor() { }

  // TODO GET
  getGroceries(): string[] {
    return this.groceries;
  }

  // TODO ADD
  addGrocery(grocery: string): void {
    this.groceries.push(grocery);
  }
}
