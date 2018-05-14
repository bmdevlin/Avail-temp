import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RestPostsProvider } from  '../../providers/rest-tasks/rest-posts';
import { Chat } from '../../providers/rest-tasks/rest-chats';
import { Post } from '../../providers/rest-tasks/rest-posts';
import { MySessionToken } from '../../providers/token';
/**
 * Generated class for the ConvoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convo',
  templateUrl: 'convo.html',
})
export class ConvoPage {
  private posts: Post[] = [];
  private token: string;
  private chat: Chat;
  private newPost: Post;

  data = { type:'', name:'', message:'' };
  //bubbles = [];
  //chatkey:string;
  //name:string;
  //offStatus:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public restProvider: RestPostsProvider,  public mySessionToken: MySessionToken) {
 
    this.chat = this.navParams.get('chat');
    this.newPost = new Post;
    this.newPost.chatid = this.chat.id;

    this.token = this.navParams.get('token');
    this.restProvider.getPosts(this.chat.id, this.token).subscribe(
      (posts: Post[])=>{
      this.posts = posts;
      }, error => {
        console.log('get posts failed: ');
    });

  }

  sendBubble() {
    this.restProvider.createPost(this.token, this.newPost).subscribe((post: Post)=>{
      this.posts.push(post); 
    });
 
    this.newPost.message = '';
  }

  exitChat() {
    let exitData = this.data;
    exitData.type = 'exit';
    //exitData.name = this.name;
   // exitData.message = this.name + ' has exited the chat.';
  }


}
