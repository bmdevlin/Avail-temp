import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestTimelinesProvider {

  baseTimelineUrl:string =    "https://shrouded-harbor-31805.herokuapp.com/timelines"; //"https://shrouded-harbor-31805.herokuapp.com/timelines";  "http://localhost:3000/timelines";

  constructor(public httpClient: HttpClient) {
    console.log('Hello RestTimelinesProvider Provider');
  }

  getTimelines (sToken: string): Observable<Timeline[]> {
     
    let headers = new HttpHeaders().set('Authorization', sToken ); 

    return this.httpClient.get<Timeline[]>(this.baseTimelineUrl, {headers: headers})

  }

  // Sending a GET request to /timelines/:id
  getTimelineById(sToken: string, timelineId: number): Observable<Timeline> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var timelineUrl = `${this.baseTimelineUrl}/${timelineId}`;
    return this.httpClient.get<Timeline>(timelineUrl, {headers: headers})

  }

  createTimeline(sToken: string, timeline: Timeline): Observable<Timeline> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<Timeline>(this.baseTimelineUrl, timeline, {headers: headers})
  }

  // Sending a PUT request to /timelines/:id
  updateTimeline(sToken: string, timeline: Timeline){
    let headers = new HttpHeaders().set('Authorization', sToken );
    var timelineUrl = `${this.baseTimelineUrl}/${timeline.id}`;

    return this.httpClient.put<Timeline>(timelineUrl, timeline, {headers: headers})
  }

  /** DELETE: delete the timeline from the server */
  deleteTimeline (sToken: string, id: number): Observable<{}> {
    let headers = new HttpHeaders().set('Authorization',sToken );
    var delurl = `${this.baseTimelineUrl}/${id}`;
    return this.httpClient.delete(delurl, {headers: headers})
  }


}

export class Timeline {
  id: number;
  customer: number;
  userid: number;
  photoURL:string; 
  videoid: number;
  message: string;
  created_at: string;
  updated_at: string;
}
