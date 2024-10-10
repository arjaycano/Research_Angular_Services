import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonecontactlistService {
  private phoneContacts: string[] = [];

  constructor() { }

  // TODO GET
  getPhoneContacts(): string[] {
    return this.phoneContacts;
  }

  // TODO ADD
  addPhoneContact(phoneContact: string): void {
    this.phoneContacts.push(phoneContact);
  }
}
