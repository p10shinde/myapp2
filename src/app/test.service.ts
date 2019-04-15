import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

   constructor(private httpClient: HttpClient) { }


   getData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

   getUsers() {
    return this.httpClient.get('https://api.github.com/users?since=135');
  }
}
