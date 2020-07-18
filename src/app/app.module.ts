import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//modules 
import { SupportModule } from './support.module';
import { WebsiteModule } from './website/website.module';
import { PortalClientModule } from './portal-client/portal-client.module';
import { PortalAdminModule } from './portal-admin/portal-admin.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// socket
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// environment
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.wsUrl, options: {} };


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SupportModule,
    WebsiteModule,
    PortalClientModule,
    PortalAdminModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
