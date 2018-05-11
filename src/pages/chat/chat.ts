import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MySessionToken } from '../../providers/token';

import { RestChatsProvider } from '../../providers/rest-tasks/rest-chats';
import { Chat } from '../../providers/rest-tasks/rest-chats';
import { AddChatPage } from '../addchat/addchat';
import { ConvoPage } from '../convo/convo';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  private chats: Chat[] = [];
  private token: string;

  convos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl: ModalController,
    public restProvider: RestChatsProvider,  public mySessionToken: MySessionToken) {

    this.mySessionToken.getMyAuthToken().then(stoken => {
      this.token = stoken;
      this.restProvider.getChats(this.token).subscribe((chats: Chat[])=>{
        this.chats = chats;
      }, error => {
        console.log('get chats failed: ');
      });

    });
    //this.convos.push({name: 'Tara'});
  }

  addChat() {
    let addModal = this.modalCtrl.create(AddChatPage);
    addModal.onDidDismiss((chat) => {
          if(chat){
            this.restProvider.createChat(this.token, chat)
              .subscribe(task => this.chats.push(chat), 
              error => { console.log('add chat failed: ', chat);
          });
          }
    });
    addModal.present();
  }

  joinChat(chat: Chat) {
    this.navCtrl.push(ConvoPage);
  }

}
