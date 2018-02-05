import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import { SessionData } from '../models/session-data';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  type: any;  

  constructor(public authService: AuthService, public router: Router, public app: AppComponent) { }

  ngOnInit() {

  }
  ngDoCheck() {      
    this.type = SessionData.userType;
  }
  logout() {
    SessionData.clear();
    this.authService.logout();    
  }
}
