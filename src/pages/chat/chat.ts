import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams, Content, ModalController } from 'ionic-angular';
import { RestUsersProvider } from '../../providers/rest-users/rest-users';
import { MySessionToken } from '../../providers/token';

import { RestChatsProvider } from '../../providers/rest-chats/rest-chats';
import { AddChatPage } from '../addchat/addchat';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatsPage {

  messages: Observable<any[]>;
  message = '';
  data = { type:'', name:'', text:'' };
  chatId = null;
  chatTitle = '';
  //currentUserId = this.usersProvider.getCurrentUserId();
  @ViewChild('content') content: Content;


  constructor(public navCtrl: NavController, public navParams: NavParams, private chatsProvider: RestChatsProvider, private usersProvider: RestUsersProvider) {
    this.chatId = this.navParams.get("chatId");
    this.chatTitle = this.navParams.get('users');
    //this.name = this.navParams.get("nickname") as string;
    //this.data.type = 'message';
    //this.data.name = this.name;

   // this.messages = this.chatsProvider.getChatMessages(this.chatId);
  }

//   sendBubble() {
//     this.restProvider.createPost(this.token, this.newPost).subscribe((post: Post)=>{
//       this.posts.push(post); 
//     });
 
//     this.newPost.message = '';
//   }

  sendMessage() {

    // this.chatsProvider.addChatMessage(this.message, this.chatId).then(() => {
    //   this.message = '';
    //   this.content.scrollToBottom();
    // });
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

// @IonicPage()
// @Component({
//   selector: 'page-convo',
//   templateUrl: 'convo.html',
// })
// export class ConvoPage {
//   private posts: Post[] = [];
//   private token: string;
//   private chat: Chat;
//   private newPost: Post;

//   data = { type:'', name:'', message:'' };
//   //bubbles = [];
//   //chatkey:string;
//   //name:string;
//   //offStatus:boolean = false;

//   constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
//     public restProvider: RestPostsProvider,  public mySessionToken: MySessionToken) {
 
//     this.chat = this.navParams.get('chat');
//     this.newPost = new Post;
//     this.newPost.chatid = this.chat.id;

//     this.token = this.navParams.get('token');
//     this.restProvider.getPosts(this.chat.id, this.token).subscribe(
//       (posts: Post[])=>{
//       this.posts = posts;
//       }, error => {
//         console.log('get posts failed: ');
//     });

//   }

//   }
