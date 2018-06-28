import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalentriesPage } from './calentries';

@NgModule({
  declarations: [
    CalentriesPage,
  ],
  imports: [
    IonicPageModule.forChild(CalentriesPage),
  ],
})
export class CalentriesPageModule {}
