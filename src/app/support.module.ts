import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from '@agm/core';

// modules 
import { AppRoutingModule } from './app-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

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
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDa6TUyZgel1yVouR8DZ0Nqh-nnCpPw0UE'
    }),
    AppRoutingModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  entryComponents: [],
  exports: [
    AppRoutingModule,
    FontAwesomeModule,
    AgmCoreModule,
    HeaderComponent,
    FooterComponent,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ]
})
export class SupportModule {}