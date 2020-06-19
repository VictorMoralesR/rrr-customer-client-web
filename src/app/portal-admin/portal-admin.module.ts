import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules 
import { PortalAdminRoutingModule } from './portal-admin-routing.module';
import { SupportModule } from './../support.module';
//components
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminChatListPageComponent } from './admin-chat-list-page/admin-chat-list-page.component';
import { AdminConversationPageComponent } from './admin-conversation-page/admin-conversation-page.component';


@NgModule({
  declarations: [AdminLoginPageComponent, AdminHomePageComponent, AdminHeaderComponent, AdminChatListPageComponent, AdminConversationPageComponent],
  imports: [
    CommonModule,
    PortalAdminRoutingModule,
    SupportModule
  ]
})
export class PortalAdminModule { }
