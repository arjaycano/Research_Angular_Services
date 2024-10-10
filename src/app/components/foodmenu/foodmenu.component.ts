import {Component, OnInit} from '@angular/core';
import {FoodmenuService} from "../../Services/foodmenu/foodmenu.service";

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrl: './foodmenu.component.css'
})
export class FoodmenuComponent implements OnInit {
  foodList: string[] = [];
  foodName: string = '';

  constructor(private foodMenuService: FoodmenuService) {
  }

  ngOnInit() {
    this.foodList = this.foodMenuService.getFoodMenus();
  }

  // TODO ADD DATA
  addFoodMenu() {
    console.log(this.foodList);
    this.foodMenuService.addFoodMenu(this.foodName);
    this.foodName = '';
  }
}
