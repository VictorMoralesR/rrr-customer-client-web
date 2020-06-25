import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPublicationPageComponent } from './client-publication-page.component';

describe('ClientPublicationPageComponent', () => {
  let component: ClientPublicationPageComponent;
  let fixture: ComponentFixture<ClientPublicationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPublicationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPublicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
