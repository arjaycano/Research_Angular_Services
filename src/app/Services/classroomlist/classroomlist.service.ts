import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomlistService {
  private classrooms: string[] = [];

  constructor() { }

  // TODO GET
  getClassrooms(): string[] {
    return this.classrooms;
  }

  // TODO ADD
  addClassroom(classroom: string): void {
    this.classrooms.push(classroom);
  }
}
