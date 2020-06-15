import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAboutPageComponent } from './customer-about-page.component';

describe('CustomerAboutPageComponent', () => {
  let component: CustomerAboutPageComponent;
  let fixture: ComponentFixture<CustomerAboutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAboutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
