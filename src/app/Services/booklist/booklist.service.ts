import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  private books: string[] = [];

  constructor() { }

  // TODO GET
  getBooks(): string[] {
    return this.books;
  }

  // TODO ADD
  addBook(book: string): void {
    this.books.push(book);
  }
}
