import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

import { UserProfileService } from '../services/userProfile.service';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';
import { Event } from '../models/event.model';
@Injectable()
export class EventService {
    eventsCol:  AngularFirestoreCollection<Event>;
    events: Event[];
    eventsChanged= new Subject<Event[]>();
    event: Event;

    private group: Group;
    private groupSubscription: Subscription;

    private fbSubs: Subscription[] = [];

    constructor(
        //private db: AngularFireDatabase,
        private afs: AngularFirestore,
        private userProfileService: UserProfileService,
        private groupService: GroupService
        )
         {
            console.log('Event Service constructor');
    }

    createEvent(newEvent: Event) {
        const timestamp = this.getTimeStamp();
        const groupId = this.groupService.myActiveGroupId;
        var userName;

        userName = this.userProfileService.getUserName();
        console.log('createEvent event: ' + newEvent.title)
        this.afs.collection('groups').doc(groupId).collection('events').add(
            {'title': newEvent.title,
            'start': newEvent.start,
            'end': newEvent.end,
            'allday': newEvent.allday
            //'owner': userName
            });
    }

    updateEvent(event: Event) {
        const timestamp = this.getTimeStamp();
        const groupId = this.groupService.myActiveGroupId;
        var userName;

        // if valid, use my name and email id from the groupMember collection. Otherwise, use the default values
        if (this.groupService.myActiveMemberInfo){
            userName = this.groupService.myActiveMemberInfo.memberName;
        }
        else{
            userName = this.userProfileService.getUserName;
        }
 
        this.afs.collection('groups').doc(groupId).collection('events')
        .doc('events/' + event.id).update(event);

        //    data =>
        //    { data = {'title': title,
        //    'start': start,
        //    'end': end,
        //    'allday': allday
        //    }});
    }

    getEvents()  {
        console.log('Event Service getEvents');

        //this.group = this.groupService.getActiveGroup();
        console.log('Event Service - current group' + this.groupService.myActiveGroupId);
        //this.afs.collection('groups')
        //        .doc(this.groupService.myActiveGroupId)

        this.afs.doc('groups/' + this.groupService.myActiveGroupId)
                .collection('events')
                .snapshotChanges()
                .pipe(map(docArray => {
                return docArray.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        title: doc.payload.doc.data().title,
                        owner: doc.payload.doc.data().owner,
                        start: doc.payload.doc.data().start,
                        end: doc.payload.doc.data().end,
                        allday: doc.payload.doc.data().allday
                       // ...doc.payload.doc.data()
                    }
                })
                }))
                .subscribe((events: Event[]) => {
                this.events = events;
                this.eventsChanged.next([...this.events]);
                console.log('Event Service getEvents: ' + this.events);
        });

        }

    cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
    }

    getTimeStamp() {
    const now = new Date();
    var dayInMonth = now.getUTCDate();
    var dayString: string;

    if (dayInMonth < 10){
        dayString = '0' + dayInMonth;
    }
    else{
        dayString = dayInMonth.toString();
    };

    const date = now.getUTCFullYear() + '-' +
                    (now.getUTCMonth() + 1) + '-' +
                    dayString;
    const time = now.getUTCHours() + ':' +
                    now.getUTCMinutes() + ':' +
                    now.getUTCSeconds();

    return (date + 'T' + time);
    }

    createStarterEvents(){
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);

    //    this.createEvent('Doctor appointment', yearMonth+'-24T14:00:00', yearMonth+'-24T16:00:00', false,  60);
    //    this.createEvent('Meeting', yearMonth+'-14T10:30:00', yearMonth+'-14T11:30:00', false,  30);
    }

    public getSeedEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any = [{
            title: 'All Day Event',
            start: yearMonth + '-01'
        },
        {
            title: 'Long Event',
            start: yearMonth + '-07',
            end: yearMonth + '-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-16T16:00:00'
        },
        {
            title: 'Conference',
            start: yearMonth + '-11',
            end: yearMonth + '-13'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T10:30:00',
            end: yearMonth + '-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: yearMonth + '-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: yearMonth + '-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: yearMonth + '-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: yearMonth + '-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: yearMonth + '-28'
        }];
        return of(data);
    }
}
