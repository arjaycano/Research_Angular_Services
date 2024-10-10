import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetlistService {
  private budgets: string[] = [];

  constructor() { }

  // TODO GET
  getBudgets(): string[] {
    return this.budgets;
  }

  // TODO ADD
  addBudget(budget: string): void {
    this.budgets.push(budget);
  }
}
