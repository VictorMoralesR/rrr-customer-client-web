import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//support -- import header and routing --
import { SupportModule } from '../support.module';
//routing 
import { WebsiteRoutingModule } from './website-routing.module';

//components
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { CustomerProductsPageComponent } from './customer-products-page/customer-products-page.component';
import { CustomerAboutPageComponent } from './customer-about-page/customer-about-page.component';
import { CustomerContactPageComponent } from './customer-contact-page/customer-contact-page.component';
import { CustomerLocationPageComponent } from './customer-location-page/customer-location-page.component';
import { CustomerFaqsPageComponent } from './customer-faqs-page/customer-faqs-page.component';
import { HeaderComponent } from './website-header/header.component';
import { FooterComponent } from './website-footer/footer.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,CustomerHomePageComponent, CustomerProductsPageComponent, CustomerAboutPageComponent, CustomerContactPageComponent, CustomerLocationPageComponent, CustomerFaqsPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SupportModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
