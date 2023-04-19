import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-room-users-search',
  templateUrl: './chat-room-users-search.component.html',
  styleUrls: ['./chat-room-users-search.component.css']
})
export class ChatRoomUsersSearchComponent {
  @Output() users_to_display = new EventEmitter<string>
onInput(event:any){
  this.users_to_display.emit(event.target.value)
}
}