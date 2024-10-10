import {Component, OnInit} from '@angular/core';
import {FrameworklistService} from "../../Services/frameworklist/frameworklist.service";

@Component({
  selector: 'app-frameworklist',
  templateUrl: './frameworklist.component.html',
  styleUrl: './frameworklist.component.css'
})
export class FrameworklistComponent implements OnInit {
  frameworkList: string[] = [];
  frameworkName: string = '';

  constructor(private frameworkListService: FrameworklistService) {
  }

  ngOnInit() {
    this.frameworkList = this.frameworkListService.getFrameworks();
  }

  // TODO ADD DATA
  addFramework() {
    console.log(this.frameworkList);
    this.frameworkListService.addFramework(this.frameworkName);
    this.frameworkName = '';
  }
}
