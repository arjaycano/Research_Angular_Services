import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideolistService {
  private videos: string[] = [];

  constructor() { }

  // TODO GET
  getVideos(): string[] {
    return this.videos;
  }

  // TODO ADD
  addVideo(video: string): void {
    this.videos.push(video);
  }
}
