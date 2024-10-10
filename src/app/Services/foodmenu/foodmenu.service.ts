import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodmenuService {
  private foodmenus: string[] = [];

  constructor() { }

  // TODO GET
  getFoodMenus(): string[] {
    return this.foodmenus;
  }

  // TODO ADD
  addFoodMenu(foodMenu: string): void {
    this.foodmenus.push(foodMenu);
  }
}
