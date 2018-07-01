import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { MySessionToken } from '../token';

 
@Injectable()
export class RestGroupsProvider {

  private baseUrl:string;

  constructor(public httpClient: HttpClient, sessionToken: MySessionToken) {
    console.log('Hello RestChatsProvider ');
    this.baseUrl = sessionToken.getBaseURL("chats");
  }
  /** GET chats from the server */
  getChats (sToken: string): Observable<Chat[]> {
     
    let headers = new HttpHeaders().set('Authorization', sToken ); 

    return this.httpClient.get<Chat[]>(this.baseUrl, {headers: headers})

  }

  // Sending a GET request to /chats/:id
  getChatById(sToken: string, chatId: number): Observable<Chat> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var chatUrl = `${this.baseUrl}/${chatId}`;
    return this.httpClient.get<Chat>(chatUrl, {headers: headers})

  }

  createChat(sToken: string, chat: Chat): Observable<Chat> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<Chat>(this.baseUrl, chat, {headers: headers})
  }

  // Sending a PUT request to /chats/:id
  updateChat(sToken: string, chat: Chat){
    let headers = new HttpHeaders().set('Authorization', sToken );
    var chatUrl = `${this.baseUrl}/${chat.id}`;

    return this.httpClient.put<Chat>(chatUrl, chat, {headers: headers})
  }

  /** DELETE: delete the chat from the server */
  deleteChat (sToken: string, id: number): Observable<{}> {
    let headers = new HttpHeaders().set('Authorization',sToken );
    var delurl = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(delurl, {headers: headers})
  }


 

}

export class Chat {
  id: number;
  ownerid: number;
  description: string;
  groupphotoid: number;
  chatsettingsid: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

