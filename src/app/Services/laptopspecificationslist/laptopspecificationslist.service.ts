import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopspecificationslistService {
  private laptopSpecifications: string[] = [];

  constructor() { }

  // TODO GET
  getLaptopSpecifications(): string[] {
    return this.laptopSpecifications;
  }

  // TODO ADD
  addLaptopSpecification(laptopSpecification: string): void {
    this.laptopSpecifications.push(laptopSpecification);
  }
}
