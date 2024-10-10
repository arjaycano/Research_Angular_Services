import {Component, OnInit} from '@angular/core';
import {AccessorylistService} from "../../Services/accessorylist/accessorylist.service";

@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent implements OnInit{
  accessoryList: string[] = [];
  accessoryName: string = '';

  constructor(private accessoryListService: AccessorylistService) {
  }

  ngOnInit() {
    this.accessoryList = this.accessoryListService.getAccessories();
  }

  // TODO ADD DATA
  addAccessories() {
    console.log(this.accessoryName);
    this.accessoryListService.addAccessory(this.accessoryName);
    this.accessoryName = '';
  }
}
