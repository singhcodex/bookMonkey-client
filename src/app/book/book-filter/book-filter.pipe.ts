import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], searchTerm: string): Book[] | null {
    
    if(!searchTerm){
      return books;
    }

    if(!books){
      return [];
    }

    return books.filter((book: Book | null) => {
     return book?.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
    
  }

}
