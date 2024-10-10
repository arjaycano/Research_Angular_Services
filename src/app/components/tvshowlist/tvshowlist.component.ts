import {Component, OnInit} from '@angular/core';
import {TvshowlistService} from "../../Services/tvshowlist/tvshowlist.service";

@Component({
  selector: 'app-tvshowlist',
  templateUrl: './tvshowlist.component.html',
  styleUrl: './tvshowlist.component.css'
})
export class TvshowlistComponent implements OnInit {
  tvShowList: string[] = [];
  tvShowName: string = '';

  constructor(private tvShowListService: TvshowlistService) {
  }

  ngOnInit() {
    this.tvShowList = this.tvShowListService.getTvShows();
  }

  // TODO ADD DATA
  addTvShow() {
    console.log(this.tvShowList);
    this.tvShowListService.addTvShow(this.tvShowName);
    this.tvShowName = '';
  }
}
