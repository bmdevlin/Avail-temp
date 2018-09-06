import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { MySessionToken } from './token';

@Injectable()
export class AuthProvider {
  private keztraAuthURL: string;
  public myAuthToken: string;


  constructor(private httpClient: HttpClient) { //, sessionToken: MySessionToken) {
     this.myAuthToken = 'no value';
     this.keztraAuthURL =  'https://shrouded-harbor-31805.herokuapp.com/authenticate' // 'http://localhost:3000/authenticate' // sessionToken.getBaseURL('authenticate');
  }


  /** POST credentials to get auth token from the server */

  getAuthToken(body: Credentials)  {
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };

    return this.httpClient.post<AuthToken>(this.keztraAuthURL, body);


  }


}

export class Credentials {
  email: string;
  password: string;
}

export class AuthToken {
   auth_token: string;
}
