import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChatListPageComponent } from './admin-chat-list-page.component';

describe('AdminChatListPageComponent', () => {
  let component: AdminChatListPageComponent;
  let fixture: ComponentFixture<AdminChatListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChatListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChatListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
