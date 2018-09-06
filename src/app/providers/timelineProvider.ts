import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MySessionToken } from './token';

@Injectable({
  providedIn: 'root'
})
export class TimelineProvider {

  private API_URL: string;

  constructor(public httpClient: HttpClient, sessionToken: MySessionToken) {
    console.log('Hello RestTimelinesProvider Provider');
    this.API_URL = sessionToken.getBaseURL('timelines');
  }

  getTimelines(sessionToken: string){
    let headers = new HttpHeaders().set('Authorization', sessionToken );
    return  this.httpClient.get(this.API_URL, {headers: headers});
  }

  createTimelineEntry(sessionToken: string, timeline: Timeline){
    let headers = new HttpHeaders().set('Authorization', sessionToken );
    return  this.httpClient.post(this.API_URL, timeline, {headers: headers});
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
