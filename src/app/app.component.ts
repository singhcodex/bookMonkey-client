import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmonkey-client';

  book = {
    title : 'How to write an Essay',
    author: 'Singh',
    abstract: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Obcaecati at quos dolor neque corrupti aspernatur adipisci laudantium fuga numquam molestiae`
  }
}
