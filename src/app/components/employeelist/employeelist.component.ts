import {Component, OnInit} from '@angular/core';
import {EmployeelistService} from "../../Services/employeelist/employeelist.service";

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit {
  employeeList: string[] = [];
  employeeName: string = '';

  constructor(private employeeListService: EmployeelistService) {
  }

  ngOnInit() {
    this.employeeList = this.employeeListService.getEmployees();
  }

  // TODO ADD DATA
  addEmployee() {
    console.log(this.employeeList);
    this.employeeListService.addEmployee(this.employeeName);
    this.employeeName = '';
  }
}
