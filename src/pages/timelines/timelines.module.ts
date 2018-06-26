import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelinesPage } from './timelines';

@NgModule({
  declarations: [
    TimelinesPage,
  ],
  imports: [
    IonicPageModule.forChild(TimelinesPage),
  ],
})
export class TimelinesPageModule {}
