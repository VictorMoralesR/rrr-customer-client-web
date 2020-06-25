import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules 
import { PortalClientRoutingModule } from './portal-client-routing.module';
import { SupportModule } from './../support.module';

//components
import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientChatListPageComponent } from './client-chat-list-page/client-chat-list-page.component';
import { ClientConversationPageComponent } from './client-conversation-page/client-conversation-page.component';


@NgModule({
  declarations: [ClientLoginPageComponent, ClientHomePageComponent, ClientHeaderComponent, ClientChatListPageComponent, ClientConversationPageComponent],
  imports: [
    CommonModule,
    PortalClientRoutingModule,
    SupportModule
  ]
})
export class PortalClientModule { }
