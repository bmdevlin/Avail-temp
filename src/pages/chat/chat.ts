import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams, Content, ModalController } from 'ionic-angular';
import { RestUsersProvider } from '../../providers/rest-users/rest-users';

import { Chat } from '../../providers/rest-groups/rest-groups';
import { Post } from '../../providers/rest-chats/rest-chats';
import { MySessionToken } from '../../providers/token';

import { RestChatsProvider } from '../../providers/rest-chats/rest-chats';
import { AddChatPage } from '../add-chat/add-chat';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  private messages: Post[] = [];
  private chat: Chat;
  private newPost: Post;
  private token: string;
   message = '';
   data = { type:'', name:'', text:'' };
  //chatId = null;
  //chatTitle = '';

  private currentUserId = 0;

  @ViewChild('content') content: Content;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    private chatsProvider: RestChatsProvider, private usersProvider: RestUsersProvider, public mySessionToken: MySessionToken) {

   this.chat = this.navParams.get('chat');
   this.newPost = new Post;
   this.newPost.chatid = this.chat.id;

   this.token = this.navParams.get('token');
   this.chatsProvider.getPosts(this.chat.id, this.token).subscribe(
     (posts: Post[])=>{
     this.messages = posts;
     }, error => {
       console.log('get posts failed: ');
   });
  }

  sendMessage() {
    this.chatsProvider.createPost(this.token, this.newPost).subscribe(post => {
        this.messages.push(post);
        this.currentUserId = post.customer;
        this.newPost.message = '';
        this.content.scrollToBottom();
    });
  }

  // temporary workaround to get the user nicknames
  public getUserName (userid: number){
      if (userid == 3){return "Tara"};
      if (userid == 4){return "Barry"};
      if (userid == 5){return "Mala"};
      if (userid == 6){return "Fred"};
      if (userid == 7){return "Joe"};
  }

  exitChat() {
    let exitData = this.data;
    exitData.type = 'exit';
    //exitData.name = this.name;
    this.message = ' has exited the conversation.';

    // this.chatsProvider.addChatMessage(this.message, this.chatId).then(() => {
    //   this.message = '';
    // });
  }


}