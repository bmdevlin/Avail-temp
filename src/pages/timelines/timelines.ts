import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { MySessionToken } from '../../providers/token';

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
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,   public modalCtrl: ModalController,
                  public restProvider: RestTimelinesProvider,  public mySessionToken: MySessionToken) {
    this.newTimeline = new Timeline; 

    this.mySessionToken.getMyAuthToken().then(stoken => {
      this.token = stoken;
      this.restProvider.getTimelines(this.token).subscribe((timelines: Timeline[])=>{
        this.timelines = timelines;
      }, error => {
        console.log('get timelines failed: ');
      });

    });
  }

  ionViewDidLoad() {
    
  }

  resetNewTimeline(){
    this.newTimeline.photoURL = "";
    this.newTimeline.videoid = 0;
    this.newTimeline.message = "";
  }

  addPhotoURL(){
    this.restProvider.createTimeline(this.token, this.newTimeline)
              .subscribe(timeline => this.timelines.push(timeline), 
              error => { console.log('add timeline failed: ', this.newTimeline);
          });
    this.resetNewTimeline();
  }

  addMessage(){
    this.restProvider.createTimeline(this.token, this.newTimeline)
              .subscribe(timeline => this.timelines.push(timeline), 
              error => { console.log('add timeline failed: ', this.newTimeline);
          });
    this.resetNewTimeline();
  }


  addVideoid(){
    this.restProvider.createTimeline(this.token, this.newTimeline)
              .subscribe(timeline => this.timelines.push(timeline), 
              error => { console.log('add timeline failed: ', this.newTimeline);
          });
    this.resetNewTimeline();
  }  

 

}
