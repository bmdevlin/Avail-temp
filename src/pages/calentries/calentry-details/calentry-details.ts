import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calentry } from '../../../providers/rest-calentries/rest-calentries';

/**
 * Generated class for the CalentryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calentry-details',
  templateUrl: 'calentry-details.html',
})
export class CalentryDetailsPage {
  private calentry: Calentry;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.calentry = new Calentry();
  }

  ionViewDidLoad() {
    this.calentry = this.navParams.get('calentry');
  }

}
