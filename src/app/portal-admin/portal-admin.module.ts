import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalAdminRoutingModule } from './portal-admin-routing.module';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';


@NgModule({
  declarations: [AdminLoginPageComponent],
  imports: [
    CommonModule,
    PortalAdminRoutingModule
  ]
})
export class PortalAdminModule { }
