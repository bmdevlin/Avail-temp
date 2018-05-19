import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RestUsersProvider, UserCredentials } from '../../providers/rest-users/rest-users';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //userGroup: FormGroup;

  userCreds = new UserCredentials();
  private token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, //private fb: FormBuilder,
              private usersProvider: RestUsersProvider, public toastCtrl: ToastController) {
    // this.userGroup = this.fb.group({
    //   members: this.fb.array([
    //     this.getInitialMembers()
    //   ])
    // });

    this.token = navParams.get('token');
  }

  submitRegistration() {

    // this.userCreds.created   -> rails fills in these two fields
    // this.userCreds.updated  
    this.userCreds.customer = 9001; //dummy value

    this.usersProvider.createUser(this.userCreds).subscribe( authToken => {
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000
      });
      toast.present();
      this.navCtrl.pop();
        }, error => {
          console.log('registration failed: ', this.userCreds);
        });
      
  }
  gotologin(){
    this.navCtrl.pop();
  }

  // getInitialMembers() {
  //   return this.fb.group({
  //     name: ['', [Validators.required, Validators.maxLength(214)]],
  //     email: ['', [Validators.required, Validators.pattern(new RegExp('.*@.*\..*'))]],
  //     password: ['']
  //   });
  // }

  // addMember() {
  //   const control = <FormArray>this.userGroup.controls['members'];
  //   control.push(this.getInitialMembers());
  // }

  // removeMember(i: number) {
  //   const control = <FormArray>this.userGroup.controls['members'];
  //   control.removeAt(i);
  // }

}

// export interface UserGroup {
//   name: string;
//   email: string;
//   password: string;
// }