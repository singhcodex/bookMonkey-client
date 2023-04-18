import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  
  public books$!: Observable<Book[]>;

  private subscription = Subscription.EMPTY;

  title = 'bookmonkey-client';
  bookSearchTerm: string = '';

 constructor(private router: Router, private bookApi: BookApiService){}
 

  ngOnInit() {
   this.books$ = this.bookApi.getAll();
  }

  updateBookList(input: Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
   // this.books$ = this.bookApi.searchByTitle(this.bookSearchTerm);
  }

  goToBookDetails(book: Book){
    this.router.navigate(['books', 'details', book.isbn])
 }

  
}
