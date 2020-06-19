import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

const routes: Routes = [
  { 
    path: 'portal/admin',
    component: AdminLoginPageComponent,
  },
  { 
    path: 'portal/admin/home',
    component: AdminHomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAdminRoutingModule { }
