import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConversationPageComponent } from './admin-conversation-page.component';

describe('AdminConversationPageComponent', () => {
  let component: AdminConversationPageComponent;
  let fixture: ComponentFixture<AdminConversationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConversationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConversationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
