import {Component, OnInit} from '@angular/core';
import {GrocerylistService} from "../../Services/grocerylist/grocerylist.service";

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrl: './grocerylist.component.css'
})
export class GrocerylistComponent implements OnInit {
  groceryList: string[] = [];
  groceryName: string = '';

  constructor(private groceryListService: GrocerylistService) {
  }

  ngOnInit() {
    this.groceryList = this.groceryListService.getGroceries();
  }

  // TODO ADD DATA
  addGrocery() {
    console.log(this.groceryList);
    this.groceryListService.addGrocery(this.groceryName);
    this.groceryName = '';
  }
}
