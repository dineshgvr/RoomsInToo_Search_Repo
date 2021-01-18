import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesService {

  constructor(private readonly httpClient: HttpClient) { }

  getAmenities(): Observable<any> {
    return this.httpClient.get('');
  }
}
