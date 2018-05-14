import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { Chat } from '../../providers/rest-tasks/rest-chats';
import { FormGroup, FormBuilder } from '@angular/forms'

@IonicPage()
@Component({
  selector: 'page-addchat',
  templateUrl: 'addchat.html',
})
export class AddChatPage {
  private newChat: Chat;
  private inChat: FormGroup;

  constructor(public navCtrl: NavController, public view: ViewController, private fb: FormBuilder) {
    this.newChat = new Chat();
 
    this.inChat = this.fb.group({
      description:  ['description']
    })
  }

  saveChat(){
    this.newChat.description = this.inChat.value.description; 
    this.view.dismiss(this.newChat);
  }

  close(){
    this.view.dismiss();
  }

}
