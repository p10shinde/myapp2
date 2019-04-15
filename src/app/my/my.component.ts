import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.less']
})
export class MyComponent implements OnInit {

  constructor() { }
  abc = true;
  myData = 'this is test data';
  days = ['son', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
  color = 'green';
  ngOnInit() {

  }

  changeData() {
    this.myData = 'this is new data updated';
    this.abc = !this.abc;
  }

}
