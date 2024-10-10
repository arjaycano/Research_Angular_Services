import {Component, OnInit} from '@angular/core';
import {TourlistService} from "../../Services/tourlist/tourlist.service";

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrl: './tourlist.component.css'
})
export class TourlistComponent implements OnInit {
  tourList: string[] = [];
  tourName: string = '';

  constructor(private tourListService: TourlistService) {
  }

  ngOnInit() {
    this.tourList = this.tourListService.getTours();
  }

  // TODO ADD DATA
  addTour() {
    console.log(this.tourList);
    this.tourListService.addTour(this.tourName);
    this.tourName = '';
  }
}
