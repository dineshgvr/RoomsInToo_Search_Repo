import { Component, OnInit } from '@angular/core';
import {SearchHotelService} from '../../Services/search-hotel/search-hotel.service';
import * as moment from 'moment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve-room',
  templateUrl: './reserve-room.component.html',
  styleUrls: ['./reserve-room.component.css']
})
export class ReserveRoomComponent implements OnInit {
  public selectedPropertyDetails: any;
  public diffCheckInDate: string;
  constructor(private searchHotelService: SearchHotelService,
              private matSnackBar: MatSnackBar) {
    this.searchHotelService.selectedPropertyDetails$.subscribe((response: any) => {
    this.selectedPropertyDetails = response;
    const startDate = moment(response.checkInDate, "YYYY-MM-DD");
    const endDate = moment(response.checkOutDate, "YYYY-MM-DD");
    this.diffCheckInDate = endDate.diff(startDate, 'months').toString();
  });
  }

  ngOnInit(): void {

  }

  bookRoom(): void {
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
}
