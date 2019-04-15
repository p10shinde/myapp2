import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  users;
  constructor(private tService: TestService, private router: Router) { }

   ngOnInit() {
    this.tService.getData().subscribe(dt => {
      console.log(dt)
    });
  }

   getUsers() {
    this.tService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

   navigate(id: number) {
    this.router.navigate(['/showww', id])
  }

 }
