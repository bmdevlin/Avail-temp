import { Component } from '@angular/core';
import { IonicPage, NavController,  ViewController } from 'ionic-angular';
import { Calentry } from '../../../providers/rest-calentries/rest-calentries';
import { FormGroup, FormBuilder } from '@angular/forms'
/**
 * Generated class for the AddCalentryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-calentry',
  templateUrl: 'add-calentry.html',
})
export class AddCalentryPage {
  private newCalentry: Calentry;
  private inCalentry: FormGroup;

  constructor(public navCtrl: NavController, public view: ViewController, private fb: FormBuilder) {
    this.newCalentry = new Calentry();
    this.inCalentry = this.fb.group({
      title:  ['title'],
      description:  ['description'],
      person: ['person'],
      date: ['date'],
      time: ['time'],
      duration: ['duration']
    })
  }

  saveCalentry(){
    this.newCalentry.title = this.inCalentry.value.title;
    this.newCalentry.description = this.inCalentry.value.description;
    this.newCalentry.person = this.inCalentry.value.person;
    this.newCalentry.date = this.inCalentry.value.date;
    this.newCalentry.time = this.inCalentry.value.time;
    this.newCalentry.duration = this.inCalentry.value.duration;
    this.view.dismiss(this.newCalentry);
  }

  close(){
    this.view.dismiss();
  }

}
