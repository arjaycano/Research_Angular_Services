import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComposerlistService {
  private composers: string[] = [];

  constructor() { }

  // TODO GET
  getComposers(): string[] {
    return this.composers;
  }

  // TODO ADD
  addComposer(composer: string): void {
    this.composers.push(composer);
  }
}
