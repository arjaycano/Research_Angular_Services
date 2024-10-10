import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LecturelistService {
  private lectures: string[] = [];

  constructor() { }

  // TODO GET
  getLectures(): string[] {
    return this.lectures;
  }

  // TODO ADD
  addLecture(lecture: string): void {
    this.lectures.push(lecture);
  }
}
