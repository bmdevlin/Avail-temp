import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addchat',
  templateUrl: 'addchat.html',
})
export class AddChatPage {

  //name: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //TODO make this add chat to database (currently it is a back button)
  addChat() {
    //name: "Example";
    this.navCtrl.pop();
  }

}
