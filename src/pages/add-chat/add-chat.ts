import { RestUserProfilesProvider, UserProfile } from './../../providers/rest-userprofiles/rest-userprofiles';
import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-add-chat',
  templateUrl: 'add-chat.html',
})
export class AddChatPage {
  private userProfiles: UserProfile[];
  private token: string;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private userProfileProvider: RestUserProfilesProvider, public navParams: NavParams) {
    this.token = this.navParams.get('token');
  
  }

  //TODO: database integration to get all users
  ionViewDidLoad() {
    this.token = this.navParams.get('token');
    this.userProfileProvider.getUserProfiles(this.token).subscribe(
     (userProfiles: UserProfile[])=>{
            this.userProfiles = userProfiles;
     }, error => {
       console.log('get userProfiles failed: ');
   });
    //this.filterItems();
  }

  filterItems() {
    //this.filteredUsers = this.chatUsers.map(array => {
    //  return array.filter(user => {
    //    return user['nickname'].toLowerCase().indexOf(this.search.toLowerCase()) > -1;
   //  })
   // });
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
