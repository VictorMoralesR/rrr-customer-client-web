import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPublicationsListPageComponent } from './client-publications-list-page.component';

describe('ClientPublicationsListPageComponent', () => {
  let component: ClientPublicationsListPageComponent;
  let fixture: ComponentFixture<ClientPublicationsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPublicationsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPublicationsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
