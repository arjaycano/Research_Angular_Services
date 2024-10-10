import {Component, OnInit} from '@angular/core';
import {PresentationlistService} from "../../Services/presentationlist/presentationlist.service";

@Component({
  selector: 'app-presentationlist',
  templateUrl: './presentationlist.component.html',
  styleUrl: './presentationlist.component.css'
})
export class PresentationlistComponent implements OnInit {
  presentationList: string[] = [];
  presentationName: string = '';

  constructor(private presentationListService: PresentationlistService) {
  }

  ngOnInit() {
    this.presentationList = this.presentationListService.getPresentations();
  }

  // TODO ADD DATA
  addPresentation() {
    console.log(this.presentationList);
    this.presentationListService.addPresentation(this.presentationName);
    this.presentationName = '';
  }
}
