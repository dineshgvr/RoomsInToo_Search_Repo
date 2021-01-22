import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app.routing';
import { SearchPropertyComponent } from './components/search-property/search-property.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReserveRoomComponent } from './components/reserve-room/reserve-room.component';
import {NgImageSliderModule} from 'ng-image-slider';
import {MatDialogModule} from '@angular/material/dialog';
import { ImageSliderComponent } from './common/image-slider/image-slider.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { LoginComponent } from './components/authentication/login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BookingPaymentComponent} from './components/booking-payment/booking-payment.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SearchHotelComponent,
    FooterComponent,
    SearchPropertyComponent,
    ReserveRoomComponent,
    ImageSliderComponent,
    LoginComponent,
    BookingPaymentComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRouting,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatOptionModule,
        MatSelectModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        SlickCarouselModule,
        NgImageSliderModule,
        MatSnackBarModule,
        MatRadioModule,
        MatExpansionModule
    ],
  providers: [
    // {provide: APP_BASE_HREF, useValue: '/search-room/'}
  ],
  entryComponents: [
    ImageSliderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
