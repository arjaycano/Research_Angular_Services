import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentlistService {
  private students: string[] = [];

  constructor() { }

  // TODO GET
  getStudents(): string[] {
    return this.students;
  }

  // TODO ADD
  addStudent(student: string): void {
    this.students.push(student);
  }
}
