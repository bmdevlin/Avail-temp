import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddUserProfilePage } from './add-user-profile';

@NgModule({
  declarations: [
    AddUserProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AddUserProfilePage),
  ],
})
export class AddUserProfilePageModule {}
