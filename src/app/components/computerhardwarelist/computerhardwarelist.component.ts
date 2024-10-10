import {Component, OnInit} from '@angular/core';
import {ComputerhardwarelistService} from "../../Services/computerhardwarelist/computerhardwarelist.service";

@Component({
  selector: 'app-computerhardwarelist',
  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent implements OnInit {
  computerHardwareList: string[] = [];
  computerHardwareName: string = '';

  constructor(private computerHardwareListService: ComputerhardwarelistService) {
  }

  ngOnInit() {
    this.computerHardwareList = this.computerHardwareListService.getComputerHardwares();
  }

  // TODO ADD DATA
  addComputerHardware() {
    console.log(this.computerHardwareList);
    this.computerHardwareListService.addComputerHardware(this.computerHardwareName);
    this.computerHardwareName = '';
  }
}
