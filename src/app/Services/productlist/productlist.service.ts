import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  private products: string[] = [];

  constructor() { }

  // TODO GET
  getProducts(): string[] {
    return this.products;
  }

  // TODO ADD
  addProduct(product: string): void {
    this.products.push(product);
  }
}
