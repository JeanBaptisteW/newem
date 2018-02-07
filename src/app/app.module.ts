import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { ScrollToModule } from 'ng2-scroll-to';
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
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDefinitionService } from './services/admin-definition.service';
import { AdminDefinitionsComponent } from './admin-definitions/admin-definitions.component';
@NgModule({
  declarations: [
    AppComponent,
    DefinitionsComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminDefinitionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
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
    MatIconModule,
    MatTooltipModule,
    ScrollToModule.forRoot(),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [HttpService, AdminDefinitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
