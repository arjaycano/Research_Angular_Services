import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessorylistService {
  private accessories: string[] = [];

  constructor() { }

  // TODO GET
  getAccessories(): string[] {
    return this.accessories;
  }

  // TODO ADD
  addAccessory(accessory: string): void {
    this.accessories.push(accessory);
  }
}
