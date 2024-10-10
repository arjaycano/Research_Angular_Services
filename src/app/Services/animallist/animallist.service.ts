import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimallistService {
  private animals: string[] = [];

  constructor() { }

  // TODO GET
  getAnimals(): string[] {
    return this.animals;
  }

  // TODO ADD
  addAnimal(animal: string): void {
    this.animals.push(animal);
  }
}
