import {Component, OnInit} from '@angular/core';
import {MobileapplistService} from "../../Services/mobileapplist/mobileapplist.service";

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent implements OnInit {
  mobileAppList: string[] = [];
  mobileAppName: string = '';

  constructor(private mobileAppListService: MobileapplistService) {
  }

  ngOnInit() {
    this.mobileAppList = this.mobileAppListService.getMobileApps();
  }

  // TODO ADD DATA
  addMobileApp() {
    console.log(this.mobileAppList);
    this.mobileAppListService.addMobileApp(this.mobileAppName);
    this.mobileAppName = '';
  }
}
