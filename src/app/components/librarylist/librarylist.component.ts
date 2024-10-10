import {Component, OnInit} from '@angular/core';
import {LibrarylistService} from "../../Services/librarylist/librarylist.service";

@Component({
  selector: 'app-librarylist',
  templateUrl: './librarylist.component.html',
  styleUrl: './librarylist.component.css'
})
export class LibrarylistComponent implements OnInit {
  libraryList: string[] = [];
  libraryName: string = '';

  constructor(private libraryListService: LibrarylistService) {
  }

  ngOnInit() {
    this.libraryList = this.libraryListService.getLibraries();
  }

  // TODO ADD DATA
  addLibrary() {
    console.log(this.libraryList);
    this.libraryListService.addLibrary(this.libraryName);
    this.libraryName = '';
  }
}
