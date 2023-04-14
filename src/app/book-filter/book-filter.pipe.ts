import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], searchTerm: string): Book[] {
    
    if(!searchTerm){
      return books;
    }

    if(!books){
      return [];
    }

    return books.filter((book: Book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    
  }

}
