import { Component, Input } from '@angular/core';
import { message } from 'src/app/models/message.model';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room-messages',
  templateUrl: './chat-room-messages.component.html',
  styleUrls: ['./chat-room-messages.component.css']
})
export class ChatRoomMessagesComponent {
@Input() messages:message[] | any
@Input() myUser:user |any;
myMessage=false;
removeMessage(message:message){
  for(let i=0;i<this.messages.length;i++){
    if(this.messages[i]===message) this.messages.splice(i,1);
  }
}
 onSendMessage(event:any){
 this.messages.push({user:this.myUser, message:event})
 }

}
