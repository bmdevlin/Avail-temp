import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams, Content, ModalController } from 'ionic-angular';

import { UserProfile } from '../../providers/rest-userprofiles/rest-userprofiles';
import { Post } from '../../providers/rest-chats/rest-chats';
import { MySessionToken } from '../../providers/token';

import { RestChatsProvider } from '../../providers/rest-chats/rest-chats';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  private messages: Post[] = [];
  private userProfile: UserProfile;
  private newPost: Post;
  private token: string;
  

  @ViewChild('content') content: Content;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    private chatsProvider: RestChatsProvider, public mySessionToken: MySessionToken) {

   this.userProfile = this.navParams.get('userProfile');
   this.token = this.navParams.get('token');

   this.newPost = new Post;
   this.newPost.customer = this.userProfile.customer;
   this.newPost.userid = this.userProfile.id;
   this.newPost.name = this.userProfile.firstname;

 
    this.chatsProvider.getPosts(this.userProfile.customer, this.token).subscribe(
      (posts: Post[])=>{
      this.messages = posts;
    }, error => {
      console.log('get posts failed: ');
    });
 
  }

  sendMessage() {
    this.chatsProvider.createPost(this.token, this.newPost).subscribe(post => {
        this.messages.push(post);
        this.newPost.message = '';
       // this.content.scrollToBottom();
    });
  }
 

}