import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminChatListPageComponent } from './admin-chat-list-page/admin-chat-list-page.component';
import { AdminConversationPageComponent } from './admin-conversation-page/admin-conversation-page.component';
import { AdminClientsListComponent } from './admin-clients-list/admin-clients-list.component';
import { AdminPublicationsListComponent } from './admin-publications-list/admin-publications-list.component';

const routes: Routes = [
  { 
    path: 'portal/admin',
    component: AdminLoginPageComponent,
  },
  { 
    path: 'portal/admin/inicio',
    component: AdminHomePageComponent,
  },
  { 
    path: 'portal/admin/chat',
    component: AdminChatListPageComponent,
  },
  { 
    path: 'portal/admin/conversacion',
    component: AdminConversationPageComponent,
  },
  { 
    path: 'portal/admin/clientes',
    component: AdminClientsListComponent,
  },
  { 
    path: 'portal/admin/publicaciones',
    component: AdminPublicationsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAdminRoutingModule { }
