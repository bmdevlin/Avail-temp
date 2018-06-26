import { Component } from '@angular/core';
import { IonicPage, NavController,  NavParams, ViewController } from 'ionic-angular';
import { UserProfile } from '../../../providers/rest-userprofiles/rest-userprofiles';

@IonicPage()
@Component({
  selector: 'page-update-user-profile',
  templateUrl: 'update-user-profile.html',
})
export class UpdateUserProfilePage {

  private newUserProfile: UserProfile;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
                       public view: ViewController) {
    this.newUserProfile = new UserProfile();
  }

  ionViewDidLoad() {
    this.newUserProfile = this.navParams.get('userProfile');
  }

  saveUserProfile(){
    this.view.dismiss(this.newUserProfile);
  }

  close(){
    this.view.dismiss();
  }
}
