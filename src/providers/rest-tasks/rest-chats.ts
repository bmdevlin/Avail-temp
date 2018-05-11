import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

 
@Injectable()
export class RestChatsProvider {

  baseChatUrl:string =  "http://localhost:3000/chats"; //"https://shrouded-harbor-31805.herokuapp.com/chats";  "http://localhost:3000/chats";


  constructor(public httpClient: HttpClient) {
    console.log('Hello RestChatsProvider ');
  }
  /** GET chats from the server */
  getChats (sToken: string): Observable<Chat[]> {
     
    let headers = new HttpHeaders().set('Authorization', sToken ); 

    return this.httpClient.get<Chat[]>(this.baseChatUrl, {headers: headers})

  }

  // Sending a GET request to /chats/:id
  getChatById(sToken: string, chatId: number): Observable<Chat> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var chatUrl = `${this.baseChatUrl}/${chatId}`;
    return this.httpClient.get<Chat>(chatUrl, {headers: headers})

  }

  createChat(sToken: string, chat: Chat): Observable<Chat> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<Chat>(this.baseChatUrl, chat, {headers: headers})
  }

  // Sending a PUT request to /chats/:id
  updateChat(sToken: string, chat: Chat){
    let headers = new HttpHeaders().set('Authorization', sToken );
    var chatUrl = `${this.baseChatUrl}/${chat.id}`;

    return this.httpClient.put<Chat>(chatUrl, chat, {headers: headers})
  }

  /** DELETE: delete the chat from the server */
  deleteChat (sToken: string, id: number): Observable<{}> {
    let headers = new HttpHeaders().set('Authorization',sToken );
    var delurl = `${this.baseChatUrl}/${id}`;
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

