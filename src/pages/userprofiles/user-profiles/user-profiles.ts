import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { MySessionToken } from '../../../providers/token';

import { RestUserProfilesProvider } from '../../../providers/rest-userprofiles/rest-userprofiles';
import { UserProfile } from '../../../providers/rest-userprofiles/rest-userprofiles';
import { UserProfileDetailsPage } from '../user-profile-details/user-profile-details';
import { AddUserProfilePage } from '../add-user-profile/add-user-profile';
import { UpdateUserProfilePage } from '../update-user-profile/update-user-profile';


@IonicPage()
@Component({
  selector: 'page-user-profiles',
  templateUrl: 'user-profiles.html',
})
export class UserProfilesPage {
  private userProfiles: UserProfile[] = [];
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,   public modalCtrl: ModalController,
                  public restProvider: RestUserProfilesProvider,  public mySessionToken: MySessionToken) {
    this.mySessionToken.getMyAuthToken().then(stoken => {
      this.token = stoken;
      this.restProvider.getUserProfiles(this.token).subscribe((userProfiles: UserProfile[])=>{
        this.userProfiles = userProfiles;
      }, error => {
        console.log('get userProfiles failed: ');
      });

    });
  }

  ionViewDidLoad() {

  }

  getProfiles() {
    this.mySessionToken.getMyAuthToken().then(stoken => {
      this.token = stoken;
      this.restProvider.getUserProfiles(this.token).subscribe((userProfiles: UserProfile[])=>{
        this.userProfiles = userProfiles;
      }, error => {
        console.log('get userProfiles failed: ');
      });

    });

  }

  addUserProfile(){
    let addModal = this.modalCtrl.create(AddUserProfilePage);
    addModal.onDidDismiss((userProfile) => {
          if(userProfile){
            this.restProvider.createUserProfile(this.token, userProfile)
              .subscribe(userProfile => this.userProfiles.push(userProfile),
              error => { console.log('add UserProfile failed: ', userProfile);
          });
          }
    });
    addModal.present();
  }

  updateUserProfile(userProfile){
    this.navCtrl.push(UpdateUserProfilePage, {
      userProfile: userProfile, token: this.token
    });
  }
  
  updateModalUserProfile(userProfile:UserProfile){
    let addModal = this.modalCtrl.create(UpdateUserProfilePage,  {userProfile:userProfile});
    addModal.onDidDismiss((userProfile) => {
          if(userProfile){
            this.restProvider.updateUserProfile(this.token, userProfile)
              .subscribe(userProfile => this.userProfiles[userProfile.id]==userProfile,
                error => { console.log('update userProfile failed: ', userProfile);
            });
          }
    });
    addModal.present();
  }
 

  deleteUserProfile(id){
    this.restProvider.deleteUserProfile(this.token, id)
      .subscribe(userProfile => this.userProfiles.splice(id, 1), error => {
        console.log('delete userProfile failed: ', id);
      });
  }

  viewUserProfile(userProfile){
    this.navCtrl.push(UserProfileDetailsPage, {
      userProfile: userProfile
    });
  }


}
