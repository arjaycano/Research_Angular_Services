import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventorylistService {
  private inventories: string[] = [];

  constructor() { }

  // TODO GET
  getInventories(): string[] {
    return this.inventories;
  }

  // TODO ADD
  addInventory(inventory: string): void {
    this.inventories.push(inventory);
  }
}
