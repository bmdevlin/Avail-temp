import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timeline-form-modal',
  templateUrl: './timeline-form-modal.component.html',
  styleUrls: ['./timeline-form-modal.component.css']
})
export class TimelineFormModalComponent   {

  @Input() id: number;

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  timelineForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, 
    private formBuilder: FormBuilder ) {
      this.createForm();
     };


    private createForm() {
      this.timelineForm = this.formBuilder.group({
        photoAlbumURL: '',
        message: '',
        videoId: '' 
      });
    }  

    private submitForm() {
      this.activeModal.close(this.timelineForm.value);
    }
}
