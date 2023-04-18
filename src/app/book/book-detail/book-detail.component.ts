import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public book$!: Observable<Book>;

  constructor(private route: ActivatedRoute, private bookApi: BookApiService){
    this.book$ = this.route.params.pipe(
      switchMap(params => this.bookApi.getBookByIsbn(params?.['isbn']))
    );
  }

  ngOnInit(): void{
    // this.book$ = this.route.params.pipe(
    //   switchMap(params => this.bookApi.getBookByIsbn(params?.['isbn']))
    // )
    // console.log(this.book$)
  }
}
