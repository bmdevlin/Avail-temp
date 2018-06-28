import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCalentryPage } from './add-calentry';

@NgModule({
  declarations: [
    AddCalentryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCalentryPage),
  ],
})
export class AddCalentryPageModule {}
