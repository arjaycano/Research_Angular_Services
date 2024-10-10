import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventlistService {
  private events: string[] = [];

  constructor() { }

  // TODO GET
  getEvents(): string[] {
    return this.events;
  }

  // TODO ADD
  addEvent(event: string): void {
    this.events.push(event);
  }
}
