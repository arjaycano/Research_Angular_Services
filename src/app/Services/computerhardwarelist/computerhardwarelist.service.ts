import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputerhardwarelistService {
  private computerHardwares: string[] = [];

  constructor() { }

  // TODO GET
  getComputerHardwares(): string[] {
    return this.computerHardwares;
  }

  // TODO ADD
  addComputerHardware(computerHardware: string): void {
    this.computerHardwares.push(computerHardware);
  }
}
