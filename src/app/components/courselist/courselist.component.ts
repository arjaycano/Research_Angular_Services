import {Component, OnInit} from '@angular/core';
import {CourselistService} from "../../Services/courselist/courselist.service";

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent implements OnInit {
  courseList: string[] = [];
  courseName: string = '';

  constructor(private courseListService: CourselistService) {
  }

  ngOnInit() {
    this.courseList = this.courseListService.getCourses();
  }

  // TODO ADD DATA
  addCourse() {
    console.log(this.courseList);
    this.courseListService.addCourse(this.courseName);
    this.courseName = '';
  }
}
