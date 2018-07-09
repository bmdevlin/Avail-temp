import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController  } from 'ionic-angular';
import { TasksPage } from '../tasks/tasks/tasks';
import { UserProfilesPage } from '../userprofiles/user-profiles/user-profiles';
import { ChatPage } from '../chat/chat';
import { TimelinesPage } from '../timelines/timelines';
import { CalentriesPage } from '../calentries/calentries/calentries';
import { RestUserProfilesProvider } from '../../providers/rest-userprofiles/rest-userprofiles';
import { UserProfile } from '../../providers/rest-userprofiles/rest-userprofiles';
import { UpdateUserProfilePage } from '../userprofiles/update-user-profile/update-user-profile'
import { MySessionToken } from '../../providers/token';

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainPage {
  private userProfile: UserProfile;
  private token: string;

  constructor(public nav: NavController, public navParams: NavParams, public modalCtrl: ModalController,
                  public restProvider: RestUserProfilesProvider,  public mySessionToken: MySessionToken) {
    this.mySessionToken.getMyAuthToken().then(stoken => {
      this.token = stoken;
      this.restProvider.getUserProfile(this.token).subscribe((userProfile: UserProfile)=>{
        this.userProfile = userProfile;
      }, error => {
        console.log('get userProfile failed: ');
      });

    });
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  
  updateModalUserProfile(userProfile:UserProfile){
    let addModal = this.modalCtrl.create(UpdateUserProfilePage,  {userProfile:userProfile});
    addModal.onDidDismiss((userProfile) => {
          if(userProfile){
            this.restProvider.updateUserProfile(this.token, userProfile)
              .subscribe(userProfile => this.userProfile==userProfile,
                error => { console.log('update userProfile failed: ', userProfile);
            });
          }
    });
    addModal.present();
  }


  goToUserProfilesPage() {
    this.nav.push(UserProfilesPage);
  }
  
  goToChatPage() {
    this.nav.push(ChatPage, {
      userProfile: this.userProfile, token: this.token
    }); 
  }

  goToTimelinesPage() {
    this.nav.push(TimelinesPage,  {
      userProfile: this.userProfile, token: this.token
    }); 
  }

  goToTasksPage(event) {
    this.nav.push(TasksPage);
    }

  goToCalentriesPage(event) {
    this.nav.push(CalentriesPage);
    }
}
