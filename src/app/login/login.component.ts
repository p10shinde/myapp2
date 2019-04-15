import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { FormControl } from '@angular/forms';
import { debug } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  signupActive = false;
  username: FormControl;
  password: FormControl;
  password2: FormControl;
  constructor(private gService: GeneralService) { }

  ngOnInit() {
    this.isLoggedIn = this.gService.userLoggedIn();
    this.username = new FormControl('');
    this.password = new FormControl('');
    this.password2 = new FormControl('');
  }

  login() {
    const tUser: User = {username : this.username.value.trim(),
                    password : this.password.value.trim() }
    if (this.username.valid && tUser.username !== '') {
      if (this.password.valid && tUser.password !== '') {
        console.log(this.gService.validateUser(tUser));
      } else {
        return;
      }
    } else {
      return;
    }
    return;
  }

  signUp() {
    this.signupActive = true;
  }

  backButton() {
    this.signupActive = false;
  }

}
