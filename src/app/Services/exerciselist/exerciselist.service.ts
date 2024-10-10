import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciselistService {
  private exercises: string[] = [];

  constructor() { }

  // TODO GET
  getExercises(): string[] {
    return this.exercises;
  }

  // TODO ADD
  addExercise(exercise: string): void {
    this.exercises.push(exercise);
  }
}
