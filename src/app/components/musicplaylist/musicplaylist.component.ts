import {Component, OnInit} from '@angular/core';
import {MusicplaylistService} from "../../Services/musicplaylist/musicplaylist.service";

@Component({
  selector: 'app-musicplaylist',
  templateUrl: './musicplaylist.component.html',
  styleUrl: './musicplaylist.component.css'
})
export class MusicplaylistComponent implements OnInit {
  musicList: string[] = [];
  musicName: string = '';

  constructor(private musicPlaylistService: MusicplaylistService) {
  }

  ngOnInit() {
    this.musicList = this.musicPlaylistService.getMusics();
  }

  // TODO ADD DATA
  addMusic() {
    console.log(this.musicList);
    this.musicPlaylistService.addMusic(this.musicName);
    this.musicName = '';
  }
}
