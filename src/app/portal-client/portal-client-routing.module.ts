import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClientChatListPageComponent } from './client-chat-list-page/client-chat-list-page.component';
import { ClientConversationPageComponent } from './client-conversation-page/client-conversation-page.component';

const routes: Routes = [
  { 
    path: 'portal',
    component: ClientLoginPageComponent,
  },
  { 
    path: 'portal/inicio',
    component: ClientHomePageComponent,
  },
  { 
    path: 'portal/chat',
    component: ClientChatListPageComponent,
  },
  { 
    path: 'portal/conversacion',
    component: ClientConversationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalClientRoutingModule { }
