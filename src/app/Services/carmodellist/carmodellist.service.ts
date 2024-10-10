import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarmodellistService {
  private carModels: string[] = [];

  constructor() { }

  // TODO GET
  getCarModels(): string[] {
    return this.carModels;
  }

  // TODO ADD
  addCarModel(carModel: string): void {
    this.carModels.push(carModel);
  }
}
