import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


//modules 
import { SupportModule } from './support.module';
import { WebsiteModule } from './website/website.module';
import { PortalClientModule } from './portal-client/portal-client.module';
import { PortalAdminModule } from './portal-admin/portal-admin.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SupportModule,
    WebsiteModule,
    PortalClientModule,
    PortalAdminModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
