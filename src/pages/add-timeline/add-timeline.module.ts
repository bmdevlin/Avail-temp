import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTimelinePage } from './add-timeline';

@NgModule({
  declarations: [
    AddTimelinePage,
  ],
  imports: [
    IonicPageModule.forChild(AddTimelinePage),
  ],
})
export class AddTimelinePageModule {}
