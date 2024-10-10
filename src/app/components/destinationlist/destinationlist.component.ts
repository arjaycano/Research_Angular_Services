import {Component, OnInit} from '@angular/core';
import {DestinationlistService} from "../../Services/destinationlist/destinationlist.service";

@Component({
  selector: 'app-destinationlist',
  templateUrl: './destinationlist.component.html',
  styleUrl: './destinationlist.component.css'
})
export class DestinationlistComponent implements OnInit {
  destinationList: string[] = [];
  destinationName: string = '';

  constructor(private destinationListService: DestinationlistService) {
  }

  ngOnInit() {
    this.destinationList = this.destinationListService.getDestinations();
  }

  // TODO ADD DATA
  addDestination() {
    console.log(this.destinationList);
    this.destinationListService.addDestination(this.destinationName);
    this.destinationName = '';
  }
}
