import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

 
@Injectable()
export class RestChatusersProvider {

  baseChatuserUrl:string =  "https://shrouded-harbor-31805.herokuapp.com/chatusers";//"https://shrouded-harbor-31805.herokuapp.com/chatusers";  "http://localhost:3000/chatusers";


  constructor(public httpClient: HttpClient) {
    console.log('Hello RestChatusersProvider ');
  }
  /** GET chatusers from the server */
  getChatusers (sToken: string): Observable<Chatuser[]> {
     
    let headers = new HttpHeaders().set('Authorization', sToken ); 

    return this.httpClient.get<Chatuser[]>(this.baseChatuserUrl, {headers: headers})

  }

  // Sending a GET request to /chatusers/:id
  getChatuserById(sToken: string, chatuserId: number): Observable<Chatuser> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var chatuserUrl = `${this.baseChatuserUrl}/${chatuserId}`;
    return this.httpClient.get<Chatuser>(chatuserUrl, {headers: headers})

  }

  createChatuser(sToken: string, chatuser: Chatuser): Observable<Chatuser> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<Chatuser>(this.baseChatuserUrl, chatuser, {headers: headers})
  }

  // Sending a PUT request to /chatusers/:id
  updateChatuser(sToken: string, chatuser: Chatuser){
    let headers = new HttpHeaders().set('Authorization', sToken );
    var chatuserUrl = `${this.baseChatuserUrl}/${chatuser.id}`;

    return this.httpClient.put<Chatuser>(chatuserUrl, chatuser, {headers: headers})
  }

  /** DELETE: delete the chatuser from the server */
  deleteChatuser (sToken: string, id: number): Observable<{}> {
    let headers = new HttpHeaders().set('Authorization',sToken );
    var delurl = `${this.baseChatuserUrl}/${id}`;
    return this.httpClient.delete(delurl, {headers: headers})
  }


 

}

export class Chatuser {
  id: number;
  userid: number;
  displayname: string;
  photoid: number;
  created_at: string;
  updated_at: string;
}

