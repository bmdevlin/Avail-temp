import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { MySessionToken } from '../../providers/token';

import { UserProfile } from '../../providers/rest-userprofiles/rest-userprofiles';

import { RestTimelinesProvider } from '../../providers/rest-timelines/rest-timelines';
import { Timeline } from '../../providers/rest-timelines/rest-timelines';

@IonicPage()
@Component({
  selector: 'page-timelines',
  templateUrl: 'timelines.html',
})
export class TimelinesPage {
  private timelines: Timeline[] = [];
  private newTimeline: Timeline; 
  private userProfile: UserProfile;
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,   public modalCtrl: ModalController,
                  public restProvider: RestTimelinesProvider,  public mySessionToken: MySessionToken) {
    this.newTimeline = new Timeline; 

    this.userProfile = this.navParams.get('userProfile');
    this.token = this.navParams.get('token');

    this.newTimeline.name = this.userProfile.firstname;

    this.restProvider.getTimelines(this.token).subscribe((timelines: Timeline[])=>{
      this.timelines = timelines;
    }, error => {
      console.log('get timelines failed: ');
    });
 
  }

  ionViewDidLoad() {
    
  }

  resetNewTimeline(){
    this.newTimeline.photoURL = "";
    this.newTimeline.videoid = 0;
    this.newTimeline.message = "";
  }
  // add an entry to the time line
  addTimeline(){
    this.restProvider.createTimeline(this.token, this.newTimeline)
              .subscribe(timeline => this.timelines.push(timeline), 
              error => { console.log('add timeline failed: ', this.newTimeline);
          });
    this.resetNewTimeline();
  }

  

 

}
