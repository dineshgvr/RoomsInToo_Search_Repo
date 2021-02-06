import { Component, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchHotelService} from '../../Services/search-hotel/search-hotel.service';
import {Router} from '@angular/router';
import {AppConfigService} from '../../common/appConfig/app-config.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent {
  title = 'RoomsToInn-Search';
  searchHotelList: any = [];
  checkInDate: any = moment(new Date()).format('YYYY-MM-DD'); // new Date().toString("YYYY-MM-DD");
  checkOutDate: any = moment(new Date(new Date().setMonth(3))).format('YYYY-MM-DD');
  searchForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly searchHotelService: SearchHotelService,
              private readonly router: Router,
              private appConfigService: AppConfigService) {
    this.appConfigService.showHeaderBar.next(true);
    this.searchForm = this.formBuilder.group({
      checkInDate: new FormControl(this.checkInDate, [Validators.required]),
      checkOutDate: new FormControl(this.checkOutDate, [Validators.required]),
      typeOfTenant: new FormControl('', [Validators.required])
    });
  }

  onSearchHotel(): void {
    if (this.searchForm.invalid) {
      return;
    }
    this.searchHotelService.getSearchHotelList(this.searchForm.value).subscribe((response: any) => {
      this.searchHotelList = response;
    });
  }

  navigateToSearchProperty(items: any): void {
    // tslint:disable-next-line:max-line-length
    const storeSelectedProperty: object = { hotelList: items, searchParams: this.searchForm.value};
    this.searchHotelService.setSearchHotelData(storeSelectedProperty);
    this.router.navigate(['/property/' + this.formUrl(items)]);
  }

  formUrl(items: any): any{
    return items.length > 0 ? items[0].propertyId : items.propertyId;
  }

  getImage(pId: string, fileName: string): any {
     return this.searchHotelService.loadHotelImage(pId, fileName);
  }
}
