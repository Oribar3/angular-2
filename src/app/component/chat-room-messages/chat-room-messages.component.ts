import { Component, Input } from '@angular/core';
import { message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat-room-messages',
  templateUrl: './chat-room-messages.component.html',
  styleUrls: ['./chat-room-messages.component.css']
})
export class ChatRoomMessagesComponent {
@Input() messages:message[] | any
}