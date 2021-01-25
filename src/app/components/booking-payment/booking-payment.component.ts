import { Component, OnInit } from '@angular/core';
import {SearchHotelService} from '../../Services/search-hotel/search-hotel.service';
import * as moment from 'moment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../environments/environment';
import { Router } from '@angular/router';

interface month {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-booking-payment',
  templateUrl: './booking-payment.component.html',
  styleUrls: ['./booking-payment.component.css']
})

export class BookingPaymentComponent implements OnInit {
  public selectedValue: string;
  public selectedPropertyDetails: any;
  public diffCheckInDate: string;
  public creditCardYear: number[] = [];
  public creditCardMonths: string[] = [...environment.creditCardMonth];
  constructor(private searchHotelService: SearchHotelService,
              private matSnackBar: MatSnackBar,
              private readonly router: Router) {
    for (let i = 0; i < 50; i++) {
      this.creditCardYear.push(environment.creditCardYear + i);
    }
    this.searchHotelService.selectedPropertyDetails$.subscribe((response: any) => {
    this.selectedPropertyDetails = response;
    const startDate = moment(response.checkInDate, "YYYY-MM-DD");
    const endDate = moment(response.checkOutDate, "YYYY-MM-DD");
    this.diffCheckInDate = endDate.diff(startDate, 'months').toString();
  });
  }

  ngOnInit(): void {
  }

  doPayment(): void {
    const bookRoomObj: any = {
      roomPropId: this.selectedPropertyDetails.propertyId,
      checkInDate: this.selectedPropertyDetails.checkInDate,
      checkOutDate: this.selectedPropertyDetails.checkOutDate,
      roomGuestNo: this.selectedPropertyDetails.roomGuestNo,
      roomSize: this.selectedPropertyDetails.roomSize,
      typeOfTenant: this.selectedPropertyDetails.typeOfTenant
    };

    this.searchHotelService.bookRoom(bookRoomObj).subscribe((response: any) => {
      this.matSnackBar.open(response.Message, 'success', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: ['bg-green'],
      });
    });
  }
  months: month[] = [
    {value: 'j-0', viewValue: 'January'},
    {value: 'f-1', viewValue: 'February'},
    {value: 'm-2', viewValue: 'March'},
    {value: 'a-3', viewValue: 'April'},
    {value: 'm-4', viewValue: 'May'},
    {value: 'j-5', viewValue: 'June'},
    {value: 'j-6', viewValue: 'July'},
    {value: 'a-7', viewValue: 'August'},
    {value: 's-8', viewValue: 'September'},
    {value: 'o-9', viewValue: 'October'},
    {value: 'n-10', viewValue: 'November'},
    {value: 'm-11', viewValue: 'December'}
  ];
  bookSuccess(): void {
    this.router.navigate(['success']);
  }

}

