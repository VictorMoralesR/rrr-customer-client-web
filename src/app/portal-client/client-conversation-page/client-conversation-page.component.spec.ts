import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConversationPageComponent } from './client-conversation-page.component';

describe('ClientConversationPageComponent', () => {
  let component: ClientConversationPageComponent;
  let fixture: ComponentFixture<ClientConversationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientConversationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientConversationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
