import {Component, OnInit} from '@angular/core';
import {StationerylistService} from "../../Services/stationerylist/stationerylist.service";

@Component({
  selector: 'app-stationerylist',
  templateUrl: './stationerylist.component.html',
  styleUrl: './stationerylist.component.css'
})
export class StationerylistComponent implements OnInit {
  stationeryList: string[] = [];
  stationeryName: string = '';

  constructor(private stationeryListService: StationerylistService) {
  }

  ngOnInit() {
    this.stationeryList = this.stationeryListService.getStationeries();
  }

  // TODO ADD DATA
  addStationery() {
    console.log(this.stationeryList);
    this.stationeryListService.addStationery(this.stationeryName);
    this.stationeryName = '';
  }
}
