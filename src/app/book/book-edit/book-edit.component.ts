import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book$!: Observable<Book>;
  
  constructor(private bookApi: BookApiService, private route: ActivatedRoute){}
  ngOnInit() {
    this.book$ = this.route.params.pipe(
      switchMap(params => this.bookApi.getBookByIsbn(params?.['isbn']))
    );
  }
  saveChanges(book: Book){
    this.book$ = this.bookApi.updateBook(book);
    
  }


}
