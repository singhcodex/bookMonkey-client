import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  public books: Book[] = [];

  title = 'bookmonkey-client';
  bookSearchTerm: string = '';

 constructor(private bookApi: BookApiService){}

  ngOnInit() {
    this.books = this.bookApi.getAll();
  }

  handleEmitFromChild(evt:Book){
    console.log(evt);
  }

  updateBookList(input: Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
