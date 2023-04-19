import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, ObservedValueOf, Subscription, filter, iif, map, of, switchMap } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookApiService {
 

  subscription!: Subscription;
  public books$!: Observable<Book[]>;
  public filteredBooks$!: Observable<Book[]>;
  bookByIsbn!: Observable<Object>;
  private endpoint = 'http://localhost:4730';
 
  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    // return this.http.get<Book[]> ('http://localhost:4730/books', {observe: 'response'})
    // .subscribe(resp => {
    //   console.log(resp.headers.get('X-Custom-Header'));
    //   console.log(resp.body);
    // })
    return this.http.get<Book[]> (`${this.endpoint}/books`)
  }

  searchByTitle(bookSearchTerm: string) {
  //  this.filteredBooks$ = this.books.fliter((book: Book) => 
  //  book.title.toLowerCase().includes(bookSearchTerm.toLowerCase()))
  }
  
  getBookByIsbn(isbn: string): Observable<Book>{
    //return this.http.get<Book>(`${this.endpoint}/books/${isbn}`);
    return this.http.get<Book>(`${this.endpoint}/books/${isbn}`);
  }

  updateBook(book: Book): Observable<Book>{
    return this.http.put<Book>(`${this.endpoint}/books/${book.isbn}`, book);
  }

  create(book: Book): Observable<Book>{
    return this.http.post<Book>(`${this.endpoint}/books`, book);
  }
}
