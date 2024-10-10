import {Component, OnInit} from '@angular/core';
import {DevelopertoolslistService} from "../../Services/developertoolslist/developertoolslist.service";

@Component({
  selector: 'app-developertoolslist',
  templateUrl: './developertoolslist.component.html',
  styleUrl: './developertoolslist.component.css'
})
export class DevelopertoolslistComponent implements OnInit {
  developerToolList: string[] = [];
  developerToolName: string = '';

  constructor(private developerToolsListService: DevelopertoolslistService) {
  }

  ngOnInit() {
    this.developerToolList = this.developerToolsListService.getDeveloperTools();
  }

  // TODO ADD DATA
  addDeveloperTool() {
    console.log(this.developerToolList);
    this.developerToolsListService.addDeveloperTool(this.developerToolName);
    this.developerToolName = '';
  }
}
