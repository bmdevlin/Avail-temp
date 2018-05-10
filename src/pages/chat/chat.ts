import { ChatsProvider } from './../../providers/chats/chats';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the chatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  messages: Observable<any[]>;
  message = '';
  data = { type:'', name:'', text:'' };
  chatId = null;
  chatTitle = '';
  //currentUserId = this.usersProvider.getCurrentUserId();
  @ViewChild('content') content: Content;


  constructor(public navCtrl: NavController, public navParams: NavParams, private chatsProvider: ChatsProvider, private usersProvider: UsersProvider) {
    this.chatId = this.navParams.get("chatId");
    this.chatTitle = this.navParams.get('users');
    //this.name = this.navParams.get("nickname") as string;
    //this.data.type = 'message';
    //this.data.name = this.name;

    this.messages = this.chatsProvider.getChatMessages(this.chatId);
  }

  sendMessage() {
    this.chatsProvider.addChatMessage(this.message, this.chatId).then(() => {
      this.message = '';
      this.content.scrollToBottom();
    });
  }


  exitChat() {
    let exitData = this.data;
    exitData.type = 'exit';
    //exitData.name = this.name;
    this.message = ' has exited the conversation.';

    this.chatsProvider.addChatMessage(this.message, this.chatId).then(() => {
      this.message = '';
    });
  }


}
