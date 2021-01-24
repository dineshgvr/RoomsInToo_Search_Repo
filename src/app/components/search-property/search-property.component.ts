import {Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SearchHotelService} from '../../Services/search-hotel/search-hotel.service';

@Component({
  selector: 'app-search-property',
  templateUrl: './search-property.component.html',
  styleUrls: ['./search-property.component.css'],
})
export class SearchPropertyComponent implements OnInit {
  public selectedHotelInfo: any;
  public selectedRoomType: string;
  public availableAmenities = [];
  public imageObject = [];
  public filteredHotelData = [];
  public displayedColumns: any = [
    'Type of Tenancy',
    'Rent',
    'Sq.Ft',
    'Availability',
    'More Details'
  ];
  public dataSource = [];
  public searchParams;

  constructor(private httpClient: HttpClient,
              private readonly router: Router,
              private readonly searchHotelService: SearchHotelService) {
    this.searchHotelService.selectedHotelForStage2Obs$.subscribe((response: any) => {
      if (!response) {
        const searchHotelSearch: any = JSON.parse(localStorage.getItem('searchHotelData'));
        this.selectedHotelInfo = searchHotelSearch.hotelList;
        this.searchParams = searchHotelSearch.searchParams;
        this.selectedRoomType = searchHotelSearch.searchParams.typeOfTenant;
      } else {
        this.selectedHotelInfo = response.hotelList;
        this.searchParams = response.searchParams;
        this.selectedRoomType = response.searchParams.typeOfTenant;
      }

      this.showPropertyDetail(this.selectedRoomType);
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
    this.searchHotelService.getAmenitiesHotelByPropertyId(this.selectedHotelInfo[0].propertyId).subscribe((response: any) => {
      response.map((item: any) => {
          if (item.wifi === 'true' || item.wifi === 'yes') {
            this.availableAmenities.push({wifi: 'Wifi'});
          } else if (item.iron === 'true' || item.iron === 'yes') {
            this.availableAmenities.push({iron: 'Iron'});
          } else if (item.hairDryer === 'true' || item.hairDryer === 'yes') {
            this.availableAmenities.push({hair: 'HairDryer'});
          } else if (item.heating === 'true' || item.heating === 'yes') {
            this.availableAmenities.push({heating: 'Heating'});
          } else if (item.carbonMonoxideAlarm === 'true' || item.carbonMonoxideAlarm === 'yes') {
            this.availableAmenities.push({carbonMonoxideAlarm: 'Carbon Monoxide Alarm'});
          } else if (item.laptopSpace === 'true' || item.laptopSpace === 'yes') {
            this.availableAmenities.push({laptopSpace: 'laptopSpace'});
          } else if (item.hangers === 'true' || item.hangers === 'yes') {
            this.availableAmenities.push({hangers: 'Hangers'});
          } else if (item.fireExtin === 'true' || item.fireExtin === 'yes') {
            this.availableAmenities.push({fireExtin: 'FireExtin'});
          } else if (item.firstAidKit === 'true' || item.firstAidKit === 'yes') {
            this.availableAmenities.push({firstAidKit: 'firstAidKit'});
          } else if (item.washingMachine === 'true' || item.washingMachine === 'yes') {
            this.availableAmenities.push({washingMachine: 'Washing Machine'});
          }
      });
    });
  }

  private navigateToReserveRoom(selectedPropertyDetail): void {
    // tslint:disable-next-line:max-line-length
    this.searchHotelService.selectedPropertyDetails.next(selectedPropertyDetail);
    this.router.navigate(['reserve']);
  }

  getImage(pId: string, fileName: string): any {
    return this.searchHotelService.loadHotelImage(pId, fileName);
  }

  showPropertyDetail(typeRoom: string): void {
    this.filteredHotelData =  this.selectedHotelInfo.map((item: any) => {
          return item.room.filter((roomInner: any) => {
            if (roomInner.typeOfTenant.toLowerCase().trim() === typeRoom.toLowerCase() || typeRoom === 'All') {
              return Object.assign(roomInner, {
                propertyId: item.propertyId,
                propertyName: item.propertyName,
                address: item.address,
                state: item.state,
                country: item.country,
                masterImage: item.masterImage,
                checkInDate: this.searchParams.checkInDate,
                checkOutDate: this.searchParams.checkOutDate,
              });
            }
          });
        }).flat();
  }
}
