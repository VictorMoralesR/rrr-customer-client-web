import { Component, OnInit } from '@angular/core';
import { faUser, faHome, faUserAstronaut, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUserCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  faUser = faUser;
  faHome = faHome;
  faGlobeAmericas = faGlobeAmericas;
  faUserAstronaut = faUserAstronaut;
  faBell = faBell;
  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
