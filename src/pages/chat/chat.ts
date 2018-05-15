import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams, Content, ModalController } from 'ionic-angular';
import { RestUsersProvider } from '../../providers/rest-users/rest-users';

import { Chat } from '../../providers/rest-groups/rest-groups';
import { Post } from '../../providers/rest-chats/rest-chats';
import { MySessionToken } from '../../providers/token';

import { RestChatsProvider } from '../../providers/rest-chats/rest-chats';
import { AddChatPage } from '../addchat/addchat';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatsPage {

  private messages: Post[] = [];
  private chat: Chat;
  private newPost: Post;

  private chats: Observable<any[]>;
  private token: string;
  message = '';
  data = { type:'', name:'', text:'' };
  chatId = null;
  chatTitle = '';

  currentUserId = 3;
  //currentUserId = this.usersProvider.getCurrentUserId();
  @ViewChild('content') content: Content;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    private chatsProvider: RestChatsProvider, private usersProvider: RestUsersProvider, public mySessionToken: MySessionToken) {
 
    //this.chatTitle = this.navParams.get('users');
    //this.name = this.navParams.get("nickname") as string;
    //this.data.type = 'message';
    //this.data.name = this.name;

   // this.messages = this.chatsProvider.getChatMessages(this.chatId);

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

//   sendBubble() {
//     this.restProvider.createPost(this.token, this.newPost).subscribe((post: Post)=>{
//       this.posts.push(post); 
//     });
 
//     this.newPost.message = '';
//   }

  sendMessage() {

    // this.chatsProvider.createChatMessage(this.token, this.message).then(() => {
    //   this.message = '';
    //   this.content.scrollToBottom();
    // })

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
