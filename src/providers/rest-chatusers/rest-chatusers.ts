import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestChatUsersProvider {

    baseChatUsersUrl:string =  "http://shrouded-harbor-31805.herokuapp.com/chatusers"; //"https://shrouded-harbor-31805.herokuapp.com/tasks";  "http://localhost:3000/tasks";

    constructor(public httpClient: HttpClient) {
        console.log('Hello RestUsersProvider Provider');
    }

    getAllChatUsers (sToken: string): Observable<any[]> {

        let headers = new HttpHeaders().set('Authorization', sToken );
        var getUrl = `${this.baseChatUsersUrl}`;
        return this.httpClient.get<ChatUser[]>(getUrl, {headers: headers})

    }

}

export class ChatUser {
    userid: number;
    displayname: string;
    photoid: number;
    created_at: Date;
    updated_at: Date;
  }

 