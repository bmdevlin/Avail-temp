import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MySessionToken } from '../token';

@Injectable()
export class RestTimelinesProvider {

  private baseTimelineUrl:string; 

  constructor(public httpClient: HttpClient, sessionToken: MySessionToken) {
    console.log('Hello RestTimelinesProvider Provider');
    this.baseTimelineUrl = sessionToken.getBaseURL("timelines");
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
  name: string;
  photoURL:string; 
  videoid: number;
  message: string;
  created_at: string;
  updated_at: string;
}
