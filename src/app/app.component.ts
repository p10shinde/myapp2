import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myapp';
  active = 'active';

  toggle(e) {
    console.log(e)
    this.active = 'active';
  }
}