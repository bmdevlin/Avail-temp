import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model'
import { EventDialogComponent } from '../event-dialog/event-dialog.component';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar/index' ;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class MyCalendarComponent implements OnInit {

  animal: string;
  name: string;

  calendarOptions: Options;
  displayEvent: any;  
  events: Event[] = null;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private eventService: EventService,
    public dialog: MatDialog) { }

  ngOnInit() {
    console.log('Calendar init');
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: []
    };
    this.eventService.eventsChanged.subscribe(data => {
      this.events = data;
      console.log('Calendar eventsChanged' + this.events.toString);
    });
    this.eventService.getEvents();
    //this.eventService.createStarterEvents();
  }
  loadevents() {
    console.log("CREATE starter events");
    this.eventService.createStarterEvents();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  clickButton(model: any) {
    this.displayEvent = model;
  }

  dayClick(model: any) {
    console.log(model);
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
}

 