import { NgModule } from '@angular/core';

// modules 
import { AppRoutingModule } from './app-routing.module';

// components
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
  ],
  entryComponents: [],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class SupportModule {}