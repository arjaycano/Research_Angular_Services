import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastlistService {
  private podcasts: string[] = [];

  constructor() { }

  // TODO GET
  getPodcasts(): string[] {
    return this.podcasts;
  }

  // TODO ADD
  addPodcast(podcast: string): void {
    this.podcasts.push(podcast);
  }
}
