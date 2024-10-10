import {Component, OnInit} from '@angular/core';
import {SportslistService} from "../../Services/sportslist/sportslist.service";

@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrl: './sportslist.component.css'
})
export class SportslistComponent implements OnInit{
  sportList: string[] = [];
  sportName: string = '';

  constructor(private sportsListService: SportslistService) {
  }

  ngOnInit() {
    this.sportList = this.sportsListService.getSports();
  }

  // TODO ADD DATA
  addSport() {
    console.log(this.sportList);
    this.sportsListService.addSport(this.sportName);
    this.sportName = '';
  }
}
