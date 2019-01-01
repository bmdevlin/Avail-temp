import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'event-dialog',
  template: 'passed in {{ data.name }}',
})
export class EventDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}