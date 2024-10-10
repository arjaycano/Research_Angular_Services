import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealplanlistService {
  private mealPlans: string[] = [];

  constructor() { }

  // TODO GET
  getMealPlans(): string[] {
    return this.mealPlans;
  }

  // TODO ADD
  addMealPlan(mealPlan: string): void {
    this.mealPlans.push(mealPlan);
  }
}
