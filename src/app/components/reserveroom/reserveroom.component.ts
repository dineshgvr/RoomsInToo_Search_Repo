import { Component, OnInit } from '@angular/core';
import {SearchHotelService} from '../../Services/search-hotel/search-hotel.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reserveroom',
  templateUrl: './reserveroom.component.html',
  styleUrls: ['./reserveroom.component.css']
})
export class ReserveroomComponent implements OnInit {
  public imageObject: any[] = [];
  public selectedHotelInfo: any;
  public searchParams;
  public selectedRoomType: string;
  public roomSize: string;
  public roomRate: string;
  public roomName:string;

  constructor(private readonly searchHotelService: SearchHotelService,
              private router: Router) {
    this.searchHotelService.selectedPropertyDetails$.subscribe((response: any) => {
      this.roomRate = response.roomRate;
      this.roomSize = response.roomSize;
      debugger;
      this.roomName = response;
    });
    this.searchHotelService.selectedHotelForStage2Obs$.subscribe((response: any) => {
      if (!response) {
        const searchHotelSearch: any = JSON.parse(localStorage.getItem('searchHotelData'));
        if (typeof (searchHotelSearch.hotelList) === 'object' && searchHotelSearch.hotelList.length === undefined) {
          this.selectedHotelInfo = [searchHotelSearch.hotelList];
        } else {
          this.selectedHotelInfo = searchHotelSearch.hotelList;
        }
        this.searchParams = searchHotelSearch.searchParams;
        this.selectedRoomType = searchHotelSearch.searchParams.typeOfTenant;
      } else {
        if (typeof response.hotelList === 'object') {
          this.selectedHotelInfo = [response.hotelList];
        } else {
          this.selectedHotelInfo = response.hotelList;
        }
        this.searchParams = response.searchParams;
        this.selectedRoomType = response.searchParams.typeOfTenant;
      }
      this.imageObject = [
        {
          image: 'http://roomstoinn.com:9090/downloadFile/' + this.selectedHotelInfo[0].propertyId + '/' + this.selectedHotelInfo[0].image2,
          thumbImage: 'http://roomstoinn.com:9090/downloadFile/' + this.selectedHotelInfo[0].propertyId + '/' + this.selectedHotelInfo[0].image2,
          title: 'Room'
        },
        {
          image: 'http://roomstoinn.com:9090/downloadFile/' + this.selectedHotelInfo[0].propertyId + '/' + this.selectedHotelInfo[0].image3,
          thumbImage: 'http://roomstoinn.com:9090/downloadFile/' + this.selectedHotelInfo[0].propertyId + '/' + this.selectedHotelInfo[0].image3,
          title: 'Room'
        },
        {
          image: 'http://roomstoinn.com:9090/downloadFile/' + this.selectedHotelInfo[0].propertyId + '/' + this.selectedHotelInfo[0].image4,
          thumbImage: 'http://roomstoinn.com:9090/downloadFile/' + this.selectedHotelInfo[0].propertyId + '/' + this.selectedHotelInfo[0].image4,
          title: 'Room'
        },
        {
          image: 'http://roomstoinn.com:9090/downloadFile/' + this.selectedHotelInfo[0].propertyId + '/' + this.selectedHotelInfo[0].image5,
          thumbImage: 'http://roomstoinn.com:9090/downloadFile/' + this.selectedHotelInfo[0].propertyId + '/' + this.selectedHotelInfo[0].image5,
          title: 'Room'
        }
      ];
    });
  }

  ngOnInit(): void {
  }

  navigateToReserveRoom(): void {
    this.router.navigate(['reverse-room']);
  }
}
