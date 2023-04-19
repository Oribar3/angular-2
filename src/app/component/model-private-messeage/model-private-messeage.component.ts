import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-model-private-messeage',
  templateUrl: './model-private-messeage.component.html',
  styleUrls: ['./model-private-messeage.component.css']
})
export class ModelPrivateMesseageComponent {
  @Input() user:user |undefined;
  @Output() sendMessage = new EventEmitter()
  onClickButtonSend(){
    this.sendMessage.emit()
  }

}
