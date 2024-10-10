import {Component, OnInit} from '@angular/core';
import {BooklistService} from "../../Services/booklist/booklist.service";

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent implements OnInit {
  bookList: string[] = [];
  bookName: string = '';

  constructor(private bookListService: BooklistService) {
  }

  ngOnInit() {
    this.bookList = this.bookListService.getBooks();
  }

  // TODO ADD DATA
  addBook() {
    console.log(this.bookList);
    this.bookListService.addBook(this.bookName);
    this.bookName = '';
  }
}
