import {Component, OnInit} from '@angular/core';
import {PaintinglistService} from "../../Services/paintinglist/paintinglist.service";

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent implements OnInit {
  paintingList: string[] = [];
  paintingName: string = '';

  constructor(private paintingListService: PaintinglistService) {
  }

  ngOnInit() {
    this.paintingList = this.paintingListService.getPaintings();
  }

  // TODO ADD DATA
  addPainting() {
    console.log(this.paintingList);
    this.paintingListService.addPainting(this.paintingName);
    this.paintingName = '';
  }
}
