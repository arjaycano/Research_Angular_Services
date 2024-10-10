import {Component, OnInit} from '@angular/core';
import {LaptoplistService} from "../../Services/laptoplist/laptoplist.service";

@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrl: './laptoplist.component.css'
})
export class LaptoplistComponent implements OnInit {
  laptopList: string[] = [];
  laptopName: string = '';

  constructor(private laptopListService: LaptoplistService) {
  }

  ngOnInit() {
    this.laptopList = this.laptopListService.getLaptops();
  }

  // TODO ADD DATA
  addLaptop() {
    console.log(this.laptopList);
    this.laptopListService.addLaptop(this.laptopName);
    this.laptopName = '';
  }
}
