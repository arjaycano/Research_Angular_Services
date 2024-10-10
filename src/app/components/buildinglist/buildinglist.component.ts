import {Component, OnInit} from '@angular/core';
import {BuildinglistService} from "../../Services/buildinglist/buildinglist.service";

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent implements OnInit {
  buildingList: string[] = [];
  buildingName: string = '';

  constructor(private buildingListService: BuildinglistService) {
  }

  ngOnInit() {
    this.buildingList = this.buildingListService.getBuildings();
  }

  // TODO ADD DATA
  addBuilding() {
    console.log(this.buildingList);
    this.buildingListService.addBuilding(this.buildingName);
    this.buildingName = '';
  }
}
