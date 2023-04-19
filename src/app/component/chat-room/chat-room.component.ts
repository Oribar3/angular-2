import { Component } from '@angular/core';
import { message } from 'src/app/models/message.model';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  myUser:user={
    userName:'ori',
    id:'1'
  }
users:user[]=[
  {
    userName:'moshe',
    id:'1'
  },
  {
    userName:'david',
    id:'2'
  }, {
    userName:'ronen',
    id:'3'
  }, {
    userName:'shir',
    id:'4'
  }, {
    userName:'michal',
    id:'5'
  }
]
messages:message[]=[
  {
    user:this.myUser,
    message:'hello'
  },
  {
    user:{userName:'ronen',id:'3'},
    message:'world'
  }
]
}
