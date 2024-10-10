import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevelopertoolslistService {
  private developerTools: string[] = [];

  constructor() { }

  // TODO GET
  getDeveloperTools(): string[] {
    return this.developerTools;
  }

  // TODO ADD
  addDeveloperTool(developerTool: string): void {
    this.developerTools.push(developerTool);
  }
}
