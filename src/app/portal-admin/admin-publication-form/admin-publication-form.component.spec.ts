import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPublicationFormComponent } from './admin-publication-form.component';

describe('AdminPublicationFormComponent', () => {
  let component: AdminPublicationFormComponent;
  let fixture: ComponentFixture<AdminPublicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPublicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPublicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
