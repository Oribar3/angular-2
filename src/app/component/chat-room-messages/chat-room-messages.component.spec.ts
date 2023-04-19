import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomMessagesComponent } from './chat-room-messages.component';

describe('ChatRoomMessagesComponent', () => {
  let component: ChatRoomMessagesComponent;
  let fixture: ComponentFixture<ChatRoomMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatRoomMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
