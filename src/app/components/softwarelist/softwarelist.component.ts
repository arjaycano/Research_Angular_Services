import {Component, OnInit} from '@angular/core';
import {SoftwarelistService} from "../../Services/softwarelist/softwarelist.service";

@Component({
  selector: 'app-softwarelist',
  templateUrl: './softwarelist.component.html',
  styleUrl: './softwarelist.component.css'
})
export class SoftwarelistComponent implements OnInit{
  softwareList: string[] = [];
  softwareName: string = '';

  constructor(private softwareListService: SoftwarelistService) {
  }

  ngOnInit() {
    this.softwareList = this.softwareListService.getSoftwares();
  }

  // TODO ADD DATA
  addSoftware() {
    console.log(this.softwareList);
    this.softwareListService.addSoftware(this.softwareName);
    this.softwareName = '';
  }
}
