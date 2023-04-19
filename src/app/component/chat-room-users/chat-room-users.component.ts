import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-chat-room-users',
  templateUrl: './chat-room-users.component.html',
  styleUrls: ['./chat-room-users.component.css']
})
export class ChatRoomUsersComponent {
  @Input() users: user[] |undefined;
  usersToDisplay: user[] | undefined
  privateMessageUser:user | undefined;
  isPrivateMessage:boolean = false;

  onClickUser(index:number){
    if(this.users)
    this.privateMessageUser=this.users[index];
    this.isPrivateMessage=true
  }
  ngOnInit() {
    if(this.users)
    this.usersToDisplay = [...this.users];
  }
  onUserSearch(users: any) {
    if (this.users)
       this.usersToDisplay = this.users.filter(user => user.userName.includes(users))
  }
  onSendPrivateMessage(){
   this.isPrivateMessage=false;
  }

}
