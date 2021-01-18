import { Component, OnInit } from '@angular/core';
import {Route, Router, Routes} from '@angular/router';
import {AppConfigService} from '../../common/appConfig/app-config.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private readonly routes: Router,
              private appConfigService: AppConfigService) { }

  ngOnInit(): void {
  }

  navigateToUrl(path: any): void {
    this.routes.navigate([`${path}`]);
    this.appConfigService.showHeaderBar.next(false);
  }
}
