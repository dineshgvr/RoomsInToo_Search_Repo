import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHotelService {
  public selectedPropertyDetails: any = new BehaviorSubject('');
  public selectedPropertyDetails$ = this.selectedPropertyDetails as Observable<any>;
  public selectedHotelForStage2: any = new BehaviorSubject('');
  public selectedHotelForStage2Obs$ = this.selectedHotelForStage2 as Observable<any>;

  constructor(private readonly httpClient: HttpClient) {
  }

  getSearchHotelList(searchHotelParams: any): Observable<any> {
    return this.httpClient.post<any>('http://roomstoinn.com:9090/getAvailableRoomsDetails', searchHotelParams);
  }

  loadHotelImage(pId: string, fileName: string): any {
    return this.httpClient.get<any>(`http://roomstoinn.com:9090/downloadFile/` + pId + '/' + fileName);
  }

  getAmenitiesHotelByPropertyId(pId: string): Observable<any> {
    return this.httpClient.get<any>(`http://roomstoinn.com:9090/getAmenities/` + pId);
  }

  setSearchHotelData(hotelData: any): void {
      this.removeSearchHotelData();
      localStorage.setItem('searchHotelData', JSON.stringify(hotelData));
  }

  removeSearchHotelData(): void {
    localStorage.removeItem('searchHotelData');
  }

  getSearchHotelData(): any {
    return localStorage.getItem('searchHotelData');
  }

  bookRoom(bookRoomDetail: any): Observable<any> {
    return this.httpClient.post(`http://roomstoinn.com:9090/confirmRoom`, bookRoomDetail);
  }
}
