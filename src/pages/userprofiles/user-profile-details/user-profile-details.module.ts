import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfileDetailsPage } from './user-profile-details';

@NgModule({
  declarations: [
    UserProfileDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfileDetailsPage),
  ],
})
export class UserProfileDetailsPageModule {}
