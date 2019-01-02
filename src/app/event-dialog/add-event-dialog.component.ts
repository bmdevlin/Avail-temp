import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'add-event-dialog',
  templateUrl: './add-event-dialog.html'
})
export class AddEventDialogComponent {
  public dialogRef: MatDialogRef<AddEventDialogComponent>
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
