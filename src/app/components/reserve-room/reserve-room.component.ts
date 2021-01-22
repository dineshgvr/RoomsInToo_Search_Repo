import { Component, OnInit } from '@angular/core';
import {SearchHotelService} from '../../Services/search-hotel/search-hotel.service';
import * as moment from 'moment';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reserve-room',
  templateUrl: './reserve-room.component.html',
  styleUrls: ['./reserve-room.component.css']
})
export class ReserveRoomComponent implements OnInit {
  public selectedPropertyDetails: any;
  public diffCheckInDate: string;
  constructor(private searchHotelService: SearchHotelService,
              private matSnackBar: MatSnackBar,
              private readonly router: Router) {
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
    this.router.navigate(['pay-room']);
  }
}
