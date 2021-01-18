import {RouterModule, Routes} from '@angular/router';
import {SearchHotelComponent} from './components/search-hotel/search-hotel.component';
import {NgModule} from '@angular/core';
import {SearchPropertyComponent} from './components/search-property/search-property.component';
import {ReserveRoomComponent} from './components/reserve-room/reserve-room.component';
import {LoginComponent} from './components/authentication/login/login.component';

const routes: Routes = [
  { path: '', component: SearchHotelComponent},
  { path: 'login', component: LoginComponent },
  { path: 'property/:pId', component: SearchPropertyComponent},
  {path: 'reverse-room', component: ReserveRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})

export class AppRouting {
  constructor() {
  }
}