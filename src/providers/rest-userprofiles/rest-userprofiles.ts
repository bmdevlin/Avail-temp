import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MySessionToken } from '../token';

@Injectable()
export class RestUserProfilesProvider {

  private baseUserProfileUrl:string;

  constructor(public httpClient: HttpClient, sessionToken: MySessionToken) {
    console.log('Hello RestUserProfilesProvider Provider');
    this.baseUserProfileUrl = sessionToken.getBaseURL("userinfos");
  }
  /** GET tasks from the server */
  getUserProfiles (sToken: string): Observable<UserProfile[]> {
     
    let headers = new HttpHeaders().set('Authorization', sToken ); 

    return this.httpClient.get<UserProfile[]>(this.baseUserProfileUrl, {headers: headers})

  }

  // Get the user profile of the logged-in user.
  getUserProfile(sToken: string): Observable<UserProfile> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var taskUrl = `${this.baseUserProfileUrl}/999`;
    return this.httpClient.get<UserProfile>(taskUrl, {headers: headers})

  }

  // Sending a GET request to /tasks/:id
  getUserProfileById(sToken: string, userProfileId: number): Observable<UserProfile> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var taskUrl = `${this.baseUserProfileUrl}/${userProfileId}`;
    return this.httpClient.get<UserProfile>(taskUrl, {headers: headers})

  }

  createUserProfile(sToken: string, userProfile: UserProfile): Observable<UserProfile> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<UserProfile>(this.baseUserProfileUrl, userProfile, {headers: headers})
  }

  // Sending a PUT request to /tasks/:id
  updateUserProfile(sToken: string, userProfile: UserProfile){
    let headers = new HttpHeaders().set('Authorization', sToken );
    var taskUrl = `${this.baseUserProfileUrl}/${userProfile.id}`;

    return this.httpClient.put<UserProfile>(taskUrl, userProfile, {headers: headers})
  }

  /** DELETE: delete the task from the server */
  deleteUserProfile (sToken: string, id: number): Observable<{}> {
    let headers = new HttpHeaders().set('Authorization',sToken );
    var delurl = `${this.baseUserProfileUrl}/${id}`;
    return this.httpClient.delete(delurl, {headers: headers})
  }

}

export class UserProfile {
  id: number;
  //displayname: string;
  //photoid: number;
  customer: number; 
  email: string; 
  cellphone: string; 
  address: string; 
  firstname: string;
  lastname: string;
  birthday: string;
  userid: number; 
  role: number;
  created_at: Date;
  updated_at: Date;
}