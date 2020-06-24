import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPublicationsListComponent } from './admin-publications-list.component';

describe('AdminPublicationsListComponent', () => {
  let component: AdminPublicationsListComponent;
  let fixture: ComponentFixture<AdminPublicationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPublicationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPublicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
