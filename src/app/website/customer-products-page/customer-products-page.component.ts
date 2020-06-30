import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-products-page',
  templateUrl: './customer-products-page.component.html',
  styleUrls: ['./customer-products-page.component.scss']
})
export class CustomerProductsPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSignUp(strType): void {
    this.router.navigate(['portal/registro', { strType }]);
  }

}
