import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
  */
})
export class AppComponent {
  //title = 'my-first-app-app';
  //name = 'this is my name';
  username = 'username';
  showSecret = false;
  logs = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

}
