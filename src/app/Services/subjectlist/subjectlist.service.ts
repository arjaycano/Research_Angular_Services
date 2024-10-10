import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectlistService {
  private subjects: string[] = [];

  constructor() { }

  // TODO GET
  getSubjects(): string[] {
    return this.subjects;
  }

  // TODO ADD
  addSubject(subject: string): void {
    this.subjects.push(subject);
  }
}
