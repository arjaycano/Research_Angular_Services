import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftwarelistService {
  private softwares: string[] = [];

  constructor() { }

  // TODO GET
  getSoftwares(): string[] {
    return this.softwares;
  }

  // TODO ADD
  addSoftware(software: string): void {
    this.softwares.push(software);
  }
}
