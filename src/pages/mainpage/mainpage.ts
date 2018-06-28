import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks/tasks';
import { UserProfilesPage } from '../userprofiles/user-profiles/user-profiles';
import { GroupsPage } from '../groups/groups';
import { TimelinesPage } from '../timelines/timelines';
import { CalentriesPage } from '../calentries/calentries/calentries';


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


  
  goToUserProfilesPage() {
    this.nav.push(UserProfilesPage);
  }
  
  goToGroupsPage() {
    this.nav.push(GroupsPage);
  }

  goToTimelinesPage() {
    this.nav.push(TimelinesPage);
  }

  goToTasksPage(event) {
    this.nav.push(TasksPage);
    }

  goToCalentriesPage(event) {
    this.nav.push(CalentriesPage);
    }
}
