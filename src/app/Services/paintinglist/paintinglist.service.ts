import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaintinglistService {
  private paintings: string[] = [];

  constructor() { }

  // TODO GET
  getPaintings(): string[] {
    return this.paintings;
  }

  // TODO ADD
  addPainting(painting: string): void {
    this.paintings.push(painting);
  }
}
