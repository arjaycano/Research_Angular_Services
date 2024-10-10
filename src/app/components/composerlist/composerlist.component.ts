import {Component, OnInit} from '@angular/core';
import {ComposerlistService} from "../../Services/composerlist/composerlist.service";

@Component({
  selector: 'app-composerlist',
  templateUrl: './composerlist.component.html',
  styleUrl: './composerlist.component.css'
})
export class ComposerlistComponent implements OnInit {
  composerList: string[] = [];
  composerName: string = '';

  constructor(private composerListService: ComposerlistService) {
  }

  ngOnInit() {
    this.composerList = this.composerListService.getComposers();
  }

  // TODO ADD DATA
  addComposer() {
    console.log(this.composerList);
    this.composerListService.addComposer(this.composerName);
    this.composerName = '';
  }
}
