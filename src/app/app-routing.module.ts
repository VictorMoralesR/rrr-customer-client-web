import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'routing.module.ts', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) },
  { path: 'routing.module.ts', loadChildren: () => import('./portal-client/portal-client.module').then(m => m.PortalClientModule) },
  { path: 'routing.module.ts', loadChildren: () => import('./portal-admin/portal-admin.module').then(m => m.PortalAdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }