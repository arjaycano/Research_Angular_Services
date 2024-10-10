import {Component, OnInit} from '@angular/core';
import {SubjectlistService} from "../../Services/subjectlist/subjectlist.service";

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent implements OnInit {
  subjectList: string[] = [];
  subjectName: string = '';

  constructor(private subjectListService: SubjectlistService) {
  }

  ngOnInit() {
    this.subjectList = this.subjectListService.getSubjects();
  }

  // TODO ADD DATA
  addSubject() {
    console.log(this.subjectList);
    this.subjectListService.addSubject(this.subjectName);
    this.subjectName = '';
  }
}
