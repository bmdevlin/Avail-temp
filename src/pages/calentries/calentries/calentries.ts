import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';
import { MySessionToken } from '../../../providers/token';

import { RestCalentriesProvider } from '../../../providers/rest-calentries/rest-calentries';
import { Calentry } from '../../../providers/rest-calentries/rest-calentries';
import { CalentryDetailsPage } from '../calentry-details/calentry-details';
import { AddCalentryPage } from '../add-calentry/add-calentry';
import { UpdateCalentryPage } from '../update-calentry/update-calentry';

/**
 * Generated class for the CalentriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calentries',
  templateUrl: 'calentries.html',
})
export class CalentriesPage {
  private calentries: Calentry[] = [];
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,   public modalCtrl: ModalController,
                  public restProvider: RestCalentriesProvider,  public mySessionToken: MySessionToken) {
    
    this.mySessionToken.getMyAuthToken().then(stoken => {
      this.token = stoken;
      this.restProvider.getCalentries(this.token).subscribe((calentries: Calentry[])=>{
        this.calentries = calentries;
      }, error => {
        console.log('get calentries failed: ');
      });

    });
  }

  ionViewDidLoad() {
    
  }


  addCalentry(){
    let addModal = this.modalCtrl.create(AddCalentryPage);
    addModal.onDidDismiss((calentry) => {
          if(calentry){
            this.restProvider.createCalentry(this.token, calentry)
              .subscribe( calentry => this.calentries.push(calentry),  error => {
                console.log('add calentry failed: ', calentry);
              });
          }
    });
    addModal.present();
  }

  updateCalentry(calentry){
    this.navCtrl.push(UpdateCalentryPage, {
      calentry: calentry, token: this.token
    });
  }

  updateModalCalentry(calentry){
    let addModal = this.modalCtrl.create(UpdateCalentryPage,  {calentry:calentry});
    addModal.onDidDismiss((calentry) => {
          if(calentry){
            this.restProvider.updateCalentry(this.token, calentry)
              .subscribe(calentry => this.calentries[calentry.id]==calentry, 
                  error => { console.log('update calentry failed: ', calentry);
              });
          }
    });
    addModal.present();
  }  

  deleteCalentry(id){
    this.restProvider.deleteCalentry(this.token, id)
      .subscribe(calentry => this.calentries.splice(id, 1), error => {
        console.log('delete cal entry failed: ', id);
      });
  }

  viewCalentry(calentry){
    this.navCtrl.push(CalentryDetailsPage, {
      calentry: calentry
    });
  }


}

