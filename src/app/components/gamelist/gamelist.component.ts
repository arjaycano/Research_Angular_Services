import {Component, OnInit} from '@angular/core';
import {GamelistService} from "../../Services/gamelist/gamelist.service";

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent implements OnInit{
  gameList: string[] = [];
  gameName: string = '';

  constructor(private gameListService: GamelistService) {
  }

  ngOnInit() {
    this.gameList = this.gameListService.getGames();
  }

  // TODO ADD DATA
  addGame() {
    console.log(this.gameList);
    this.gameListService.addGame(this.gameName);
    this.gameName = '';
  }
}
