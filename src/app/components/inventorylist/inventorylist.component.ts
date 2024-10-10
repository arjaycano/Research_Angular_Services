import {Component, OnInit} from '@angular/core';
import {InventorylistService} from "../../Services/inventorylist/inventorylist.service";

@Component({
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrl: './inventorylist.component.css'
})
export class InventorylistComponent implements OnInit {
  inventoryList: string[] = [];
  inventoryName: string = '';

  constructor(private inventoryListService: InventorylistService) {
  }

  ngOnInit() {
    this.inventoryList = this.inventoryListService.getInventories();
  }

  // TODO ADD DATA
  addInventory() {
    console.log(this.inventoryList);
    this.inventoryListService.addInventory(this.inventoryName);
    this.inventoryName = '';
  }
}
