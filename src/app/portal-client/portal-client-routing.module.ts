import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';

const routes: Routes = [
  { 
    path: 'portal',
    component: ClientLoginPageComponent,
  },
  { 
    path: 'portal/inicio',
    component: ClientHomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalClientRoutingModule { }
