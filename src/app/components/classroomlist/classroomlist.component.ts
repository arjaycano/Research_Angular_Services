import {Component, OnInit} from '@angular/core';
import {ClassroomlistService} from "../../Services/classroomlist/classroomlist.service";

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent implements OnInit {
  classroomList: string[] = [];
  classroomName: string = '';

  constructor(private classroomListService: ClassroomlistService) {
  }

  ngOnInit() {
    this.classroomList = this.classroomListService.getClassrooms();
  }

  // TODO ADD DATA
  addClassroom() {
    console.log(this.classroomList);
    this.classroomListService.addClassroom(this.classroomName);
    this.classroomName = '';
  }
}
