import {Component, OnInit} from '@angular/core';
import {FlowerlistService} from "../../Services/flowerlist/flowerlist.service";

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrl: './flowerlist.component.css'
})
export class FlowerlistComponent implements OnInit {
  flowerList: string[] = [];
  flowerName: string = '';

  constructor(private flowerListService: FlowerlistService) {
  }

  ngOnInit() {
    this.flowerList = this.flowerListService.getFlowers();
  }

  // TODO ADD DATA
  addFlower() {
    console.log(this.flowerList);
    this.flowerListService.addFlower(this.flowerName);
    this.flowerName = '';
  }
}
