import {Component, OnInit} from '@angular/core';
import {FurniturelistService} from "../../Services/furniturelist/furniturelist.service";

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent implements OnInit {
  furnitureList: string[] = [];
  furnitureName: string = '';

  constructor(private furnitureListService: FurniturelistService) {
  }

  ngOnInit() {
    this.furnitureList = this.furnitureListService.getFurnitures();
  }

  // TODO ADD DATA
  addFurniture() {
    console.log(this.furnitureList);
    this.furnitureListService.addFurniture(this.furnitureName);
    this.furnitureName = '';
  }
}
