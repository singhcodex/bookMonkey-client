import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, take } from 'rxjs';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit, OnDestroy{
  myBook = this.buildForm();
  bookApiSubscription = new Subscription();

 constructor(private fb: FormBuilder, private bookApi: BookApiService){}

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    
  }

  private buildForm(){
    return this.fb.nonNullable.group({
      'isbn': ['', [Validators.required]],
      'title': ['', [Validators.required]],
      'cover': [''],
      'author': [''],
      'abstract': ['']
    })
  }

  createBook():void{
    if(this.myBook.invalid) return;

    this.bookApiSubscription.add(
      this.bookApi.create(this.myBook.getRawValue()).subscribe(() => console.log)
    )
  

    console.log(this.myBook.value);
  }
}
