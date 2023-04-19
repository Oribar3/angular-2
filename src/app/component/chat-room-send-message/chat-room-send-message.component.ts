import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room-send-message',
  templateUrl: './chat-room-send-message.component.html',
  styleUrls: ['./chat-room-send-message.component.css']
})
export class ChatRoomSendMessageComponent {

  @Output() messageSend = new EventEmitter<string>
  message:string="";
  
  onInputMessage(event:any){
    this.message=event.target.value;
  }
  onSend(){
    if(this.message)
     this.messageSend.emit(this.message)
  }
}
