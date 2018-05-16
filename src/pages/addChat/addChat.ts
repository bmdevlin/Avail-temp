import { RestChatUsersProvider } from './../../providers/rest-chatusers/rest-chatusers';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-addChat',
  templateUrl: 'addChat.html',
})
export class AddChatPage {
  private chatUsers: Observable<any[]>;
  search = '';
  filteredUsers: Observable<any[]>;
  private token: string;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private chatUsersProvider: RestChatUsersProvider, public navParams: NavParams) {
    this.token = this.navParams.get('token');
  
  }

  //TODO: database integration to get all users
  ionViewDidLoad() {
    this.chatUsers = this.chatUsersProvider.getAllChatUsers(this.token);
    this.filterItems();
  }

  filterItems() {
    this.filteredUsers = this.chatUsers.map(array => {
      return array.filter(user => {
        return user['nickname'].toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      })
    });
  }

  startChat(chatUserId) {
    this.viewCtrl.dismiss({
      startChatWith: chatUserId
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
