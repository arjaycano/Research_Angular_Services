import {Component, OnInit} from '@angular/core';
import {LanguagelistService} from "../../Services/languagelist/languagelist.service";

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent implements OnInit {
  languageList: string[] = [];
  languageName: string = '';

  constructor(private languageListService: LanguagelistService) {
  }

  ngOnInit() {
    this.languageList = this.languageListService.getLanguages();
  }

  // TODO ADD DATA
  addLanguage() {
    console.log(this.languageList);
    this.languageListService.addLanguage(this.languageName);
    this.languageName = '';
  }
}
