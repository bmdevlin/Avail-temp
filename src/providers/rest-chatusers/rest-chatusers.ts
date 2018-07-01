import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MySessionToken } from '../token';

@Injectable()
export class RestChatUsersProvider {
  private  baseChatuserUrl:string;

    constructor(public httpClient: HttpClient, sessionToken: MySessionToken) {
        console.log('Hello RestUsersProvider Provider');
        this.baseChatuserUrl = sessionToken.getBaseURL("chatusers");
    }

    getAllChatUsers (sToken: string): Observable<any[]> {

        let headers = new HttpHeaders().set('Authorization', sToken );
        var getUrl = `${this.baseChatuserUrl}`;
        return this.httpClient.get<any[]>(getUrl, {headers: headers})

    }

}
 
 