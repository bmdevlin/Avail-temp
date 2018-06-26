import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { UserProfile } from '../../../providers/rest-userprofiles/rest-userprofiles';
import { FormGroup, FormBuilder } from '@angular/forms'
  

@IonicPage()
@Component({
  selector: 'page-add-user-profile',
  templateUrl: 'add-user-profile.html',
})
export class AddUserProfilePage {
  private newUserProfile: UserProfile;
  private inUserProfile: FormGroup;

  constructor(public navCtrl: NavController, public view: ViewController, private fb: FormBuilder) {
    this.newUserProfile = new UserProfile();
    this.inUserProfile = this.fb.group({
      firstname:  ['firstname'],
      lastname:  ['lastname'],
      cellphone: ['cellphone'],
      email: ['email'],
      birthday: ['birthday']
    })
  }

  saveUserProfile(){
    this.newUserProfile.firstname = this.inUserProfile.value.firstname;
    this.newUserProfile.lastname = this.inUserProfile.value.lastname;
    this.newUserProfile.cellphone = this.inUserProfile.value.cellphone;
    this.newUserProfile.email = this.inUserProfile.value.email;
    this.newUserProfile.birthday = this.inUserProfile.value.birthday;
    this.view.dismiss(this.newUserProfile);
  }

  close(){
    this.view.dismiss();
  }

}
