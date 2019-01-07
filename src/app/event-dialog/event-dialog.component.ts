import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'event-dialog',
  templateUrl: './event-dialog.component.html'
})
export class EventDialogComponent {
  public dialogRef: MatDialogRef<EventDialogComponent>
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}