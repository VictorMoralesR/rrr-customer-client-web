import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules 
import { AppRoutingModule } from './app-routing.module';

// components
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  entryComponents: [],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class SupportModule {}