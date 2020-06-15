import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';

//support -- import header and routing --
import { SupportModule } from '../support.module';
//routing 
import { WebsiteRoutingModule } from './website-routing.module';
import { CustomerProductsPageComponent } from './customer-products-page/customer-products-page.component';
import { CustomerAboutPageComponent } from './customer-about-page/customer-about-page.component';
import { CustomerContactPageComponent } from './customer-contact-page/customer-contact-page.component';
import { CustomerLocationPageComponent } from './customer-location-page/customer-location-page.component';
import { CustomerFaqsPageComponent } from './customer-faqs-page/customer-faqs-page.component';

// components



@NgModule({
  declarations: [CustomerHomePageComponent, CustomerProductsPageComponent, CustomerAboutPageComponent, CustomerContactPageComponent, CustomerLocationPageComponent, CustomerFaqsPageComponent],
  imports: [
    CommonModule,
    SupportModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
