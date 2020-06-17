import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDa6TUyZgel1yVouR8DZ0Nqh-nnCpPw0UE'
    }),
    AppRoutingModule,
    FontAwesomeModule
  ],
  entryComponents: [],
  exports: [
    AppRoutingModule,
    FontAwesomeModule,
    AgmCoreModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SupportModule {}