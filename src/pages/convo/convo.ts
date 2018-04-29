import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  data = { type:'', name:'', message:'' };
  bubbles = [];
  chatkey:string;
  name:string;
  offStatus:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chatkey = this.navParams.get("key") as string;
    this.name = this.navParams.get("nickname") as string;
    this.data.type = 'message';
    this.data.name = this.name;
  }

  sendBubble() {
    var newData = { type:'vv', name:'v', message:'vvvvv' }; //this.data it a placeholder, newdata should come from database or chat server get call
    //newData.set({
    //   type: this.data.type,
    //   name: this.data.name,
    //   message: this.data.message,
    //   sendDate: Date();
    // })
    newData.type = this.data.type;
    newData.name = this.data.name;
    newData.message = this.data.message;
    this.bubbles.push(newData);
    console.log(this.bubbles);
    console.log(this.data);
    this.data.message = '';
  }

  exitChat() {
    let exitData = this.data;
    exitData.type = 'exit';
    exitData.name = this.name;
    exitData.message = this.name + ' has exited the chat.';
  }


}
