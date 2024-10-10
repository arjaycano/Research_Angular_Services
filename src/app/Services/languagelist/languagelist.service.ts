import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagelistService {
  private languages: string[] = [];

  constructor() { }

  // TODO GET
  getLanguages(): string[] {
    return this.languages;
  }

  // TODO ADD
  addLanguage(language: string): void {
    this.languages.push(language);
  }
}
