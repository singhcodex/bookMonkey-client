import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmonkey-client';

  public book : Book = {
    title : 'How to write an Essay',
    author: 'Singh Simran',
    abstract: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Obcaecati at quos dolor neque corrupti aspernatur adipisci laudantium fuga numquam molestiae`
  }
  
  handleEmitFromChild(evt:Book){
    console.log(evt);
  }
}
