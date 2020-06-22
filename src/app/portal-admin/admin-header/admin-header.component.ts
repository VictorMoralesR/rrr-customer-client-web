import { Component, OnInit} from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  title = 'n24-www';
  showSideNav:boolean = false;
  faUser = faUser;

  constructor() {
  }

  ngOnInit(): void {
  }

}
