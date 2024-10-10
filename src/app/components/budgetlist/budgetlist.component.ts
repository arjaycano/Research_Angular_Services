import {Component, OnInit} from '@angular/core';
import {BudgetlistService} from "../../Services/budgetlist/budgetlist.service";

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent implements OnInit {
  budgetList: string[] = [];
  budgetName: string = '';

  constructor(private budgetListService: BudgetlistService) {
  }

  ngOnInit() {
    this.budgetList = this.budgetListService.getBudgets();
  }

  // TODO ADD DATA
  addBudget() {
    console.log(this.budgetList);
    this.budgetListService.addBudget(this.budgetName);
    this.budgetName = '';
  }
}
