import { Component, OnInit } from '@angular/core';

import { faUsers, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faBuilding } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.scss']
})
export class CustomerHomePageComponent implements OnInit {
  faUsers = faUsers;
  faThumbsUp = faThumbsUp;
  faBuilding = faBuilding;
  faPrint = faPrint;

  constructor() { }

  ngOnInit(): void {
  }

}
