import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrarylistService {
  private libraries: string[] = [];

  constructor() { }

  // TODO GET
  getLibraries(): string[] {
    return this.libraries;
  }

  // TODO ADD
  addLibrary(library: string): void {
    this.libraries.push(library);
  }
}
