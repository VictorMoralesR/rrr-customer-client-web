import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-location-page',
  templateUrl: './customer-location-page.component.html',
  styleUrls: ['./customer-location-page.component.scss']
})
export class CustomerLocationPageComponent implements OnInit {
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
