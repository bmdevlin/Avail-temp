import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks/tasks';
import { UserProfilesPage } from '../userprofiles/user-profiles/user-profiles';
import { GroupsPage } from '../groups/groups';
import { TimelinesPage } from '../timelines/timelines';

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
  
  goToUserProfilesPage() {
    this.nav.push(UserProfilesPage);
  }
  
  goToGroupsPage() {
    this.nav.push(GroupsPage);
  }

  goToTimelinesPage() {
    this.nav.push(TimelinesPage);
  }
}
