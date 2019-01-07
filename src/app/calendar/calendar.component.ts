import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { AddEventDialogComponent } from '../event-dialog/add-event-dialog.component';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar/index' ;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//import { Moment } from 'fullcalendar/src/moment-ext'

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
    // add this to the form: <button (click)="loadevents()"> Load Events</button>
  }

  openAddEventDialog(): void {
    const dialogRef = this.dialog.open(AddEventDialogComponent,
      {width: '450px'} );

    dialogRef.afterClosed().subscribe(result => {
      console.log('Add Event dialog afterClosed');
      if (result)
          {this.myEvent = {
            id: result.id,
            start: result.start,
            end: result.end,
            title: result.title,
            allday: result.allday
            };
            // start and end are converted to Moments https://momentjs.com/docs/#/get-set/
          //console.log('The dialog result',  result);
          this.displayEvent =  JSON.stringify(this.myEvent);
          this.eventService.createEvent(this.myEvent)
          }
    });
  }

  openUpdateEventDialog(event: Event): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '450px',
      data: {id:  event.id,
          title:  event.title,
          start:  event.start,
          end:    event.end,
          allday: event.allday}
    });

    //  result = {id: "gPbsMckzptqz0ZObIXQc", 
    //title: "new event2", start: Moment, 
    //end: "Tue Jan 08 2019 11:20:00 GMT+0000", allday: false}

     dialogRef.afterClosed().subscribe(result => {
      console.log('dialogRef afterClosed');
      if (result)
          { 
            //const startTime: Moment = result.start;
           // const endTime: Moment = result.end;
            this.myEvent = {
            id: result.id,
            start: result.start,//startTime.format(),
            end:  result.end, //endTime.format(),
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
    //this.displayEvent = model;
    //this.openDialog (model)
  }

  dayClick(model: any) {
    console.log(model);
    alert('a day has been clicked!');
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
    this.openUpdateEventDialog(this.myEvent);
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
