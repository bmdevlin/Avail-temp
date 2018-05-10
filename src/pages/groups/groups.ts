import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddChatPage } from '../addchat/addchat';
import { ChatsPage } from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {

  Chats = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.Chats = navParams.get("Groupss"); //conversation list should come from database or server in the future, pushing a test conversation for now
    this.Chats.push({name: 'Tara'});
  }

  addGroups() {
    this.navCtrl.push(AddChatPage);
  }

  joinGroups(key) {
    this.navCtrl.push(ChatsPage);
  }

}
