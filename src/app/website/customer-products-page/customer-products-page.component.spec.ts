import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProductsPageComponent } from './customer-products-page.component';

describe('CustomerProductsPageComponent', () => {
  let component: CustomerProductsPageComponent;
  let fixture: ComponentFixture<CustomerProductsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProductsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
