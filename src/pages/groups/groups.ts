import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
//import { AddChatPage } from '../add-chat/add-chat';
import { ChatPage } from '../chat/chat';

import { MySessionToken } from '../../providers/token';
import { RestGroupsProvider } from '../../providers/rest-groups/rest-groups';
import { Chat } from '../../providers/rest-groups/rest-groups';

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {

  private chats: Chat[] = [];
  private token: string;

  constructor(public navCtrl: NavController,  public modalCtrl: ModalController,
    public restProvider: RestGroupsProvider,  public mySessionToken: MySessionToken) {

    this.mySessionToken.getMyAuthToken().then(stoken => {
      this.token = stoken;
      this.restProvider.getChats(this.token).subscribe((chats: Chat[])=>{
        this.chats = chats;
      }, error => {
        console.log('get chatgroups failed: ');
      });

    });
 
  }

  addGroup() {
    //this.navCtrl.push(AddChatPage, {token: this.token});
  }

  joinGroup(chat: Chat) {
    this.navCtrl.push(ChatPage, {
      chat: chat, token: this.token
    });
  }

}
