import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionsComponent } from './definitions/definitions.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard }                from './auth-guard.service';
import { AuthService }          from './auth.service';
const appRoutes: Routes = [
  {
    path: 'definitions',
    component: DefinitionsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },

  { path: '',   redirectTo: '/definitions', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/