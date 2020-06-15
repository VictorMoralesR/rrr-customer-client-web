import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFaqsPageComponent } from './customer-faqs-page.component';

describe('CustomerFaqsPageComponent', () => {
  let component: CustomerFaqsPageComponent;
  let fixture: ComponentFixture<CustomerFaqsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFaqsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFaqsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
