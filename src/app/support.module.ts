import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// modules 
import { AppRoutingModule } from './app-routing.module';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  entryComponents: [],
  exports: [
    AppRoutingModule,
    FontAwesomeModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SupportModule {}