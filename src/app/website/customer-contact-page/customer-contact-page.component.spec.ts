import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactPageComponent } from './customer-contact-page.component';

describe('CustomerContactPageComponent', () => {
  let component: CustomerContactPageComponent;
  let fixture: ComponentFixture<CustomerContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
