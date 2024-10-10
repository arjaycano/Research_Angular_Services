import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileapplistService {
  private mobileApps: string[] = [];

  constructor() { }

  // TODO GET
  getMobileApps(): string[] {
    return this.mobileApps;
  }

  // TODO ADD
  addMobileApp(mobileApp: string): void {
    this.mobileApps.push(mobileApp);
  }
}
