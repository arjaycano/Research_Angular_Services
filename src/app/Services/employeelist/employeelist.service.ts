import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {
  private employees: string[] = [];

  constructor() { }

  // TODO GET
  getEmployees(): string[] {
    return this.employees;
  }

  // TODO ADD
  addEmployee(employee: string): void {
    this.employees.push(employee);
  }
}
