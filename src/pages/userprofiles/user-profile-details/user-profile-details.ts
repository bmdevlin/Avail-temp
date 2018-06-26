import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProfile } from '../../../providers/rest-userprofiles/rest-userprofiles';
import { RestProvider } from '../../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-user-profile-details',
  templateUrl: 'user-profile-details.html',
})
export class UserProfileDetailsPage {
  private userProfile: UserProfile;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.userProfile = new UserProfile();
  }

  ionViewDidLoad() {
    this.userProfile = this.navParams.get('userProfile');
  }

}
