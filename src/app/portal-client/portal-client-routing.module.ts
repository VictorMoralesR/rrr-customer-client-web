import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';

const routes: Routes = [
  { 
    path: 'client',
    component: ClientLoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalClientRoutingModule { }
