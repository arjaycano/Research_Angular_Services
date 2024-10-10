import {Component, OnInit} from '@angular/core';
import {CitylistService} from "../../Services/citylist/citylist.service";

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent implements OnInit {
  cityList: string[] = [];
  cityName: string = '';

  constructor(private cityListService: CitylistService) {
  }

  ngOnInit() {
    this.cityList = this.cityListService.getCities();
  }

  // TODO ADD DATA
  addCity() {
    console.log(this.cityList);
    this.cityListService.addCity(this.cityName);
    this.cityName = '';
  }
}
