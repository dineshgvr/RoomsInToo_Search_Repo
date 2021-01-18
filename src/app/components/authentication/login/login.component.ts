import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppConfigService} from '../../../common/appConfig/app-config.service';
import {LoginService} from '../../../Services/login/login.service';
import {CookieService} from 'ngx-cookie-service'
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = '';
  hide = true;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private appConfigService: AppConfigService,
              private loginService: LoginService,
              private cookiesService: CookieService,
              private matSnackBar: MatSnackBar) {
    if (this.router.url.includes('login')) {
      this.appConfigService.showHeaderBar.next(false);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: null
    });
  }

  ngOnInit(): void {
  }

  onAuthenticate(): void {
      if (this.loginForm.invalid)  { return; }
      this.loginService.loginAuthentication(this.loginForm.value).subscribe((response: any) => {
        if (response && response.firstname && response.email) {
          if (response.role.toLowerCase() === 'ho' || response.role.toLowerCase() === 'host' || response.role.toLowerCase() === 'admin') {
            this.cookiesService.set('loggedInUserData', JSON.stringify(response));
            window.location.href = environment.adminPortalUrl;
          } else {
            this.router.navigate(['/']);
          }
        } else {
          this.matSnackBar.open('Invalid UserName or Password', '', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['bg-red'],
          });
        }

      });
  }
}
