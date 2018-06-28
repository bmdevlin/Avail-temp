import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Calentry } from '../../../providers/rest-calentries/rest-calentries';

/**
 * Generated class for the UpdateCalentryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-calentry',
  templateUrl: 'update-calentry.html',
})
export class UpdateCalentryPage {

  private newCalentry: Calentry;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
                       public view: ViewController) {
    this.newCalentry = new Calentry();
  }

  ionViewDidLoad() {
    this.newCalentry = this.navParams.get('calentry');
  }

  saveCalentry(){
    this.view.dismiss(this.newCalentry);
  }

  close(){
    this.view.dismiss();
  }
}
