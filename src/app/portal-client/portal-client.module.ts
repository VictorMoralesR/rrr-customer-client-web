import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalClientRoutingModule } from './portal-client-routing.module';
import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';


@NgModule({
  declarations: [ClientLoginPageComponent],
  imports: [
    CommonModule,
    PortalClientRoutingModule
  ]
})
export class PortalClientModule { }
