import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userGroup: FormGroup;
  changeLog: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.userGroup = this.fb.group({
      members: this.fb.array([
        this.getInitialMembers()
      ])
    });
  }

  getInitialMembers() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(214)]],
      email: ['', [Validators.required, Validators.pattern(new RegExp('.*@.*\..*'))]]
    });
  }

  addMember() {
    const control = <FormArray>this.userGroup.controls['members'];
    control.push(this.getInitialMembers());
  }

  removeMember(i: number) {
    const control = <FormArray>this.userGroup.controls['members'];
    control.removeAt(i);
  }

  submitRegistration({ value, valid }: {value: UserGroup, valid: boolean}) {
    console.log('user: ', value);
    console.log('valid: ', valid);
  }

  submitForm() {
    console.log(this.userGroup);
  }
}

export interface UserGroup {
  name: string;
}