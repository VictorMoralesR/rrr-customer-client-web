import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLocationPageComponent } from './customer-location-page.component';

describe('CustomerLocationPageComponent', () => {
  let component: CustomerLocationPageComponent;
  let fixture: ComponentFixture<CustomerLocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
