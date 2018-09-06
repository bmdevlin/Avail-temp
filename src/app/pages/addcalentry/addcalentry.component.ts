import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-addcalentry',
  templateUrl: './addcalentry.component.html',
  styleUrls: ['./addcalentry.component.css']
})
export class AddcalentryComponent   {
 
  @Input() id: number;

  closeModal() {
    this.activeModal.close();
  }

  calendarForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, 
    private formBuilder: FormBuilder ) {
      this.createForm();
     };

    private createForm() {
      this.calendarForm = this.formBuilder.group({
        title:  '',
        description:  '',
        eventDate:  '',
        startTime: '' 
      });
    }  

    private submitForm() {
      this.activeModal.close(this.calendarForm.value);
    }

}
