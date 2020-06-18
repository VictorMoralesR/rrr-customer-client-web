import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';

const routes: Routes = [
  { 
    path: 'portal/admin',
    component: AdminLoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAdminRoutingModule { }
