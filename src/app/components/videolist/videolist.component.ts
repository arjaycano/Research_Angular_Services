import {Component, OnInit} from '@angular/core';
import {VideolistService} from "../../Services/videolist/videolist.service";

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent implements OnInit {
  videoList: string[] = [];
  videoName: string = '';

  constructor(private videoListService: VideolistService) {
  }

  ngOnInit() {
    this.videoList = this.videoListService.getVideos();
  }

  // TODO ADD DATA
  addVideo() {
    console.log(this.videoList);
    this.videoListService.addVideo(this.videoName);
    this.videoName = '';
  }
}
