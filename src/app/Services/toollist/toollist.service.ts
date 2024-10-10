import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToollistService {
  private tools: string[] = [];

  constructor() { }

  // TODO GET
  getTools(): string[] {
    return this.tools;
  }

  // TODO ADD
  addTool(tool: string): void {
    this.tools.push(tool);
  }
}
