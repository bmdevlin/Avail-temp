import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestChatUsersProvider {

    baseUserInfoUrl:string =  "http://localhost:3000/chatusers"; //"https://shrouded-harbor-31805.herokuapp.com/tasks";  "http://localhost:3000/tasks";

    constructor(public httpClient: HttpClient) {
        console.log('Hello RestUsersProvider Provider');
    }

    getAllChatUsers (sToken: string): Observable<any[]> {

        let headers = new HttpHeaders().set('Authorization', sToken );
        var getUrl = `${this.baseUserInfoUrl}`;
        return this.httpClient.get<any[]>(getUrl, {headers: headers})

    }

}
 
 