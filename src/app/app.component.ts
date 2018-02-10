import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionData } from './models/session-data';
import { MatDialog, MatSnackBar, MatSidenav } from '@angular/material';
import { Router,NavigationExtras, NavigationEnd } from '@angular/router';
import { AdminDefinitionService } from './services/admin-definition.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;
  isOpen: any;
  isLogin: boolean = false;
  constructor( public router: Router, public adminDefinitionService: AdminDefinitionService){
    router.events.subscribe((val) => {
      // see also 
      if(router.url !='/admin-dashboard'){
         SessionData.triggerDraft = true;
      }else{
        SessionData.triggerDraft = false;
      }
  });
  }
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
    if(SessionData.triggerDraft && SessionData.definitionForm!= undefined &&Object.keys(SessionData.definitionForm).length>0){
      this.adminDefinitionService.addDefinition(SessionData.definitionForm).subscribe(result => {
        Object.keys(SessionData.definitionForm).forEach(k => delete SessionData.definitionForm[k])
      },
        error => {
          console.log(error)
        });
    }

    SessionData.triggerDraft = false;
  }

}
