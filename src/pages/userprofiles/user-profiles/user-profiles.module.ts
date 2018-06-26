import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilesPage } from './user-profiles';

@NgModule({
  declarations: [
    UserProfilesPage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfilesPage),
  ],
})
export class UserProfilesPageModule {}
