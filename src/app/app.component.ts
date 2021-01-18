import { Component } from '@angular/core';
import {AppConfigService} from './common/appConfig/app-config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isShowHeaderBar = true;
  constructor(private appConfigService: AppConfigService) {
    this.appConfigService.headerBar$.subscribe((response: boolean) => this.isShowHeaderBar = response);
  }
}
