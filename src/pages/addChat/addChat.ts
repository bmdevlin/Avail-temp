import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-addChat',
  templateUrl: 'addChat.html',
})
export class AddChatPage {
  users: Observable<any[]>;
  search = '';
  filteredUsers: Observable<any[]>;
  
  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private usersProvider: UsersProvider) {
  }

  ionViewDidLoad() {
   // this.users = this.usersProvider.getAllUsers();
    this.filterItems();
  }

  filterItems() {
    this.filteredUsers = this.users.map(array => {
      return array.filter(user => {
        return user['nickname'].toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      })
    });
  }

  startChat(userId) {
    this.viewCtrl.dismiss({
      startChatWith: userId
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
