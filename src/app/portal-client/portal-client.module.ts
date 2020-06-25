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
import { ClientPublicationsListPageComponent } from './client-publications-list-page/client-publications-list-page.component';
import { ClientPublicationPageComponent } from './client-publication-page/client-publication-page.component';


@NgModule({
  declarations: [ClientLoginPageComponent, ClientHomePageComponent, ClientHeaderComponent, ClientChatListPageComponent, ClientConversationPageComponent, ClientPublicationsListPageComponent, ClientPublicationPageComponent],
  imports: [
    CommonModule,
    PortalClientRoutingModule,
    SupportModule
  ]
})
export class PortalClientModule { }
