import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model'
import { EventDialogComponent } from '../event-dialog/event-dialog.component';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar/index' ;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Event) {}

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

  myEvent: Event;

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

  openDialog(event: Event): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {id:  event.id,
          title:  event.title,
          start:  event.start,
          end:    event.end,
          allday: event.allday}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialogRef afterClosed');
      if (result)
          {this.myEvent = {
            id: result.id,
            start: result.start.format(),
            end: result.end.format(),
            title: result.title,
            allday: result.allday
            };
            // start and end are converted to Moments https://momentjs.com/docs/#/get-set/
          //console.log('The dialog result',  result);
          this.displayEvent =  JSON.stringify(this.myEvent);
          this.eventService.updateEvent(this.myEvent)
          }
    });
  }


  clickButton(model: any) {
    this.displayEvent = model;
    //this.openDialog (model)
  }

  dayClick(model: any) {
    console.log(model);
  }

  eventClick(model: any) {
    this.myEvent = {
      id: model.event.id,
      start: model.event.start,
      end: model.event.end,
      title: model.event.title,
      allday: model.event.allday
    }
    this.displayEvent = model;
    this.openDialog(this.myEvent);
  }
  updateEventFields(){
      console.log('updateEventFields');
  }
  updateEvent(model: any) {
      this.myEvent = {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allday: model.event.allday
      }
      this.displayEvent = JSON.stringify(this.myEvent);
  }
}
