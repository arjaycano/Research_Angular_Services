import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StationerylistService {
  private stationeries: string[] = [];

  constructor() { }

  // TODO GET
  getStationeries(): string[] {
    return this.stationeries;
  }

  // TODO ADD
  addStationery(stationery: string): void {
    this.stationeries.push(stationery);
  }
}
