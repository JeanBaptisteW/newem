import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DefinitionsComponent } from './definitions/definitions.component';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDefinitionService } from './services/admin-definition.service';
@NgModule({
  declarations: [
    AppComponent,
    DefinitionsComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule, 
    MatListModule, 
    MatGridListModule, 
    MatProgressBarModule,
    MatInputModule,
    Ng2PageScrollModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatButtonModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [HttpService,AdminDefinitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
