import {Component, OnInit} from '@angular/core';
import {
  LaptopspecificationslistService
} from "../../Services/laptopspecificationslist/laptopspecificationslist.service";

@Component({
  selector: 'app-laptopspecificationslist',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrl: './laptopspecificationslist.component.css'
})
export class LaptopspecificationslistComponent implements OnInit {
  laptopSpecificationList: string[] = [];
  laptopSpecificationName: string = '';

  constructor(private laptopSpecificationsListService: LaptopspecificationslistService) {
  }

  ngOnInit() {
    this.laptopSpecificationList = this.laptopSpecificationsListService.getLaptopSpecifications();
  }

  // TODO ADD DATA
  addLaptopSpecification() {
    console.log(this.laptopSpecificationList);
    this.laptopSpecificationsListService.addLaptopSpecification(this.laptopSpecificationName);
    this.laptopSpecificationName = '';
  }
}
