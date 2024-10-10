import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworklistService {
  private frameworks: string[] = [];

  constructor() { }

  // TODO GET
  getFrameworks(): string[] {
    return this.frameworks;
  }

  // TODO ADD
  addFramework(framework: string): void {
    this.frameworks.push(framework);
  }
}
