import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestCalentriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestCalentriesProvider {
  baseCalentryUrl:string = "http://localhost:3000/calentries";
      //"https://shrouded-harbor-31805.herokuapp.com/calentries";  "http://localhost:3000/calentries";


  constructor(public httpClient: HttpClient) {
    console.log('Hello RestCalentriesProvider Provider');
  }
  /** GET calentries from the server */
  getCalentries (sToken: string): Observable<Calentry[]> {
     
    let headers = new HttpHeaders().set('Authorization', sToken ); 

    return this.httpClient.get<Calentry[]>(this.baseCalentryUrl, {headers: headers})

  }

  // Sending a GET request to /calentries/:id
  getCalentryById(sToken: string, calentryId: number): Observable<Calentry> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var calentryUrl = `${this.baseCalentryUrl}/${calentryId}`;
    return this.httpClient.get<Calentry>(calentryUrl, {headers: headers})

  }

  createCalentry(sToken: string, calentry: Calentry): Observable<Calentry> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<Calentry>(this.baseCalentryUrl, calentry, {headers: headers})
  }

  // Sending a PUT request to /calentries/:id
  updateCalentry(sToken: string, calentry: Calentry){
    let headers = new HttpHeaders().set('Authorization', sToken );
    var calentryUrl = `${this.baseCalentryUrl}/${calentry.id}`;

    return this.httpClient.put<Calentry>(calentryUrl, calentry, {headers: headers})
  }

  /** DELETE: delete the calentry from the server */
  deleteCalentry (sToken: string, id: number): Observable<{}> {
    let headers = new HttpHeaders().set('Authorization',sToken );
    var delurl = `${this.baseCalentryUrl}/${id}`;
    return this.httpClient.delete(delurl, {headers: headers})
  }


  //////////////////////////////////////////////////////////////////////////////
 

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

 
 
 