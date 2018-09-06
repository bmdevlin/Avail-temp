import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {MySessionToken} from './token';

@Injectable({
  providedIn: 'root'
})
export class CalentryProvider {
  private API_URL: string = 'x';

  constructor(private mySessionToken: MySessionToken, private  httpClient:  HttpClient) {
      this.API_URL = mySessionToken.getBaseURL('calentries')
  }

  getCalentries(sessionToken: string){
    let headers = new HttpHeaders().set('Authorization', sessionToken );
    return  this.httpClient.get(this.API_URL, {headers: headers});
  }
  createCalentry(sessionToken: string, calentry: Calentry){
    let headers = new HttpHeaders().set('Authorization', sessionToken );
    return  this.httpClient.post(this.API_URL, calentry, {headers: headers});
  }

}

export class Calentry {
    id: number;
    title: string;
    description: string;
    customer: number;
    category: string;
    contact_id: number;
    duration: number;
    owner: number;
    person: string;
    date: string;
    time: string;
    created_at: string;
    updated_at: string;
}
