import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientChatListPageComponent } from './client-chat-list-page.component';

describe('ClientChatListPageComponent', () => {
  let component: ClientChatListPageComponent;
  let fixture: ComponentFixture<ClientChatListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientChatListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientChatListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
