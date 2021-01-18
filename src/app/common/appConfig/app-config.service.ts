import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public showHeaderBar = new BehaviorSubject(true);
  public headerBar$ = this.showHeaderBar as Observable<boolean>;
  constructor() {
  }
}
