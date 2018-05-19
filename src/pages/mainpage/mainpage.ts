import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks/tasks';
import { ChatPage } from '../chat/chat';
import { GroupsPage } from '../groups/groups';

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goToTasks(event) {
  this.nav.push(TasksPage);
  }
  
  goToChatPage() {
    this.nav.push(ChatPage);
  }
  
  goToGroupsPage() {
    this.nav.push(GroupsPage);
  }
}
