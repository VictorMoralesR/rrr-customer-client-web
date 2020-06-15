import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { CustomerProductsPageComponent } from './customer-products-page/customer-products-page.component';
import { CustomerAboutPageComponent } from './customer-about-page/customer-about-page.component';
import { CustomerContactPageComponent } from './customer-contact-page/customer-contact-page.component';
import { CustomerFaqsPageComponent } from './customer-faqs-page/customer-faqs-page.component';
import { CustomerLocationPageComponent } from './customer-location-page/customer-location-page.component';


const routes: Routes = [
  { 
    path: '',
    component: CustomerHomePageComponent,
  },
  { 
    path: 'home',
    component: CustomerHomePageComponent,
  },
  { 
    path: 'products',
    component: CustomerProductsPageComponent,
  },
  { 
    path: 'about',
    component: CustomerAboutPageComponent,
  },
  { 
    path: 'contact',
    component: CustomerContactPageComponent,
  },
  { 
    path: 'faqs',
    component: CustomerFaqsPageComponent,
  },
  { 
    path: 'location',
    component: CustomerLocationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
