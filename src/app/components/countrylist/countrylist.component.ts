import {Component, OnInit} from '@angular/core';
import {CountrylistService} from "../../Services/countrylist/countrylist.service";

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrl: './countrylist.component.css'
})
export class CountrylistComponent implements OnInit {
  countryList: string[] = [];
  countryName: string = '';

  constructor(private countryListService: CountrylistService) {
  }

  ngOnInit() {
    this.countryList = this.countryListService.getCountries();
  }

  // TODO ADD DATA
  addCountry() {
    console.log(this.countryList);
    this.countryListService.addCountry(this.countryName);
    this.countryName = '';
  }
}
