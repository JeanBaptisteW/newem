import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, NgModel, Validators, FormGroup } from '@angular/forms';
import {
  Router,
  NavigationExtras
} from '@angular/router';
import { AuthService } from '../auth.service';
import { SessionData } from '../models/session-data';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error: string;
  bar: boolean;


  constructor(public authService: AuthService, public router: Router) { 
    localStorage.clear();
  }

  ngOnInit() {

  }
  onLogin(login: NgForm) {
    console.log(login.value)
    this.bar = true;

    this.authService.login(login.value).subscribe((user) => {
             console.log(user)
      if (!user.success) {
        this.error = user.message;
      } else {

        let redirect;
        SessionData.AuthToken = user.token;
        SessionData.userType = 'admin';

           
        redirect = SessionData.redirectURL ? SessionData.redirectURL : '/admin-dashboard';
              
         
        // Redirect the user
        this.router.navigate([redirect]);
      }
      this.bar = false;


    });

  }

}
