import {Component, OnInit} from '@angular/core';
import {StudentlistService} from "../../Services/studentlist/studentlist.service";

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent implements OnInit {
  studentList: string[] = [];
  studentName: string = '';

  constructor(private studentListService: StudentlistService) {
  }

  ngOnInit() {
    this.studentList = this.studentListService.getStudents();
  }

  // TODO ADD DATA
  addStudent() {
    console.log(this.studentList);
    this.studentListService.addStudent(this.studentName);
    this.studentName = '';
  }
}
