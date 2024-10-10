import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationlistService {
  private presentations: string[] = [];

  constructor() { }

  // TODO GET
  getPresentations(): string[] {
    return this.presentations;
  }

  // TODO ADD
  addPresentation(presentation: string): void {
    this.presentations.push(presentation);
  }
}
