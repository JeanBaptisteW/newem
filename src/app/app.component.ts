import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionData } from './models/session-data';
import { MatDialog, MatSnackBar, MatSidenav } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;
  isOpen: any;
  isLogin: boolean = false;;
  title = 'app';
  ngOnInit() {
    if (this.isLogin) {
      this.drawer.open();
    }
  }
  events(event) {
    this.isOpen = event;
  }
  ngDoCheck() {
    this.isLogin = SessionData.hasLoggedIn;
  }

}
