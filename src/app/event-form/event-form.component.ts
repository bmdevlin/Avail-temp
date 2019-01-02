import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventForm = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      start: new FormControl('', {
        validators: [Validators.required]
      }),
      end: new FormControl('', {
        validators: [Validators.required]
      }),
      allday: new FormControl('', {
        validators: [Validators.required]
      }),
    });
  }

  onSubmit() {
    console.log('Add Event form submit');

    const event: Event =
    {title: this.eventForm.value.title,
    start: this.eventForm.value.start,
    end: this.eventForm.value.end,
    allday: this.eventForm.value.allday};

    this.eventService.createEvent(event);

  }
}
