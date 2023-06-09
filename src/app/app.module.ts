import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { FooterComponent } from './component/footer/footer.component';
import { ChatRoomUsersComponent } from './component/chat-room-users/chat-room-users.component';
import { ChatRoomMessagesComponent } from './component/chat-room-messages/chat-room-messages.component';
import { ChatRoomUsersSearchComponent } from './component/chat-room-users-search/chat-room-users-search.component';
import { ChatRoomSendMessageComponent } from './component/chat-room-send-message/chat-room-send-message.component';
import { ModelPrivateMesseageComponent } from './component/model-private-messeage/model-private-messeage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatRoomComponent,
    FooterComponent,
    ChatRoomUsersComponent,
    ChatRoomMessagesComponent,
    ChatRoomUsersSearchComponent,
    ChatRoomSendMessageComponent,
    ModelPrivateMesseageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
