import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildinglistService {
  private buildings: string[] = [];

  constructor() { }

  // TODO GET
  getBuildings(): string[] {
    return this.buildings;
  }

  // TODO ADD
  addBuilding(building: string): void {
    this.buildings.push(building);
  }
}
