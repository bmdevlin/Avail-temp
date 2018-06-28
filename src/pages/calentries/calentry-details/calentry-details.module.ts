import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalentryDetailsPage } from './calentry-details';

@NgModule({
  declarations: [
    CalentryDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CalentryDetailsPage),
  ],
})
export class CalentryDetailsPageModule {}
