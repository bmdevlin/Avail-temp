import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { NgClockPickerLibModule } from 'ng-clock-picker-lib';
import { ClockPickerDialogService, ClockPickerConfig } from 'ng-clock-picker-lib';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
 
  config: ClockPickerConfig = { 
    wrapperClassName: 'className', 
    closeOnOverlayClick: true 
  };
  constructor(private eventService: EventService,
    private vcr: ViewContainerRef, 
    private clockPickerDialogService: ClockPickerDialogService) { }

  ngOnInit() {
    this.clockPickerDialogService.registerViewContainerRef(this.vcr);

    this.eventForm = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      start: new FormControl('', {
        validators: [Validators.required]
      }),
      startTime: new FormControl('', {
        validators: [Validators.required]
      }),
      end: new FormControl('', {
       
      }),
      endTime: new FormControl('', {
        validators: [Validators.required]
      }),
      allday: new FormControl('', {
        validators: [Validators.required]
      }),
    });
 
  }

  showModal(): void {
    this.clockPickerDialogService.showClockPickerDialog(this.config)
    .subscribe((time: string) => console.log(time))
  }

  onSubmit() {
    console.log('Add Event form submit');

    var time = this.eventForm.value.startTime;

    const event: Event =
    {title: this.eventForm.value.title,
    start: this.eventForm.value.start,
    end: this.eventForm.value.end,
    allday: this.eventForm.value.allday};

    this.eventService.createEvent(event);

  }
}
