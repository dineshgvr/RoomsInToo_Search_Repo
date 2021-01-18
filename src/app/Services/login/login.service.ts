import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  loginAuthentication(credential: any): Observable<any> {
    return this.httpClient.post<any>(environment.BackEndUrl + 'loginProcess', credential);
  }
}
