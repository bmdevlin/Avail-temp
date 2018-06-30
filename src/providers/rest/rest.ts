import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
  tutorial on sqlite
*/
@Injectable()
export class RestProvider {
  //keztraAuthURL:string =  "http://localhost:3000/authenticate";  
  keztraAuthURL:string =  "https://shrouded-harbor-31805.herokuapp.com/authenticate";   

 
  public myAuthToken: string;

  constructor(private httpClient : HttpClient) {
     this.myAuthToken = 'no value'
  }


  /** POST credentials to get auth token from the server */

  getAuthToken(body: string):  Observable<AuthToken>  {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.httpClient.post<AuthToken>(this.keztraAuthURL, body, httpOptions);
  }



//////////////////////////////////////////////////////////////////////////////
/**
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
*/
}

export class AuthToken {
   auth_token: string;
}


