import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
