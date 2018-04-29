import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddChatPage } from '../addchat/addchat';
import { ConvoPage } from '../convo/convo';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  convos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.convos = navParams.get("chats"); //conversation list should come from database or server in the future, pushing a test conversation for now
    this.convos.push({name: 'Tara'});
  }

  addChat() {
    this.navCtrl.push(AddChatPage);
  }

  joinChat(key) {
    this.navCtrl.push(ConvoPage);
  }

}
