import {Component, OnInit} from '@angular/core';
import {CarmodellistService} from "../../Services/carmodellist/carmodellist.service";

@Component({
  selector: 'app-carmodellist',
  templateUrl: './carmodellist.component.html',
  styleUrl: './carmodellist.component.css'
})
export class CarmodellistComponent implements OnInit {
  carModelList: string[] = [];
  carModelName: string = '';

  constructor(private carModelListService: CarmodellistService) {
  }

  ngOnInit() {
    this.carModelList = this.carModelListService.getCarModels();
  }

  // TODO ADD DATA
  addCarModel() {
    console.log(this.carModelList);
    this.carModelListService.addCarModel(this.carModelName);
    this.carModelName = '';
  }
}
