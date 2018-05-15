import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestChatsProvider {

  baseChatUrl:string =  "http://shrouded-harbor-31805.herokuapp.com/chats"; //"https://shrouded-harbor-31805.herokuapp.com/tasks";  "http://localhost:3000/tasks";

  constructor(public httpClient: HttpClient) {
    console.log('Hello RestChatsProvider Provider');
  }


  getChatMessages(sToken: string): Observable<any[]> {

    let headers = new HttpHeaders().set('Authorization', sToken);

    return this.httpClient.get<any[]>(this.baseChatUrl, {headers: headers})
  }

  getChatMessageById(sToken: string, chatId: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', sToken);
    var chatURL = `${this.baseChatUrl}/${chatId}`;

    return this.httpClient.get<any>(chatURL, {headers: headers});
  }

  createChatMessage(sToken: string, chat: any): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', sToken);
    return this.httpClient.post<any>(this.baseChatUrl, chat, {headers: headers})
  }

//   getUserChatgroups() {
//     return this.db.list('groups/' + this.afAuth.auth.currentUser.uid).snapshotChanges()
//       .map(actions => {
//         return actions.map(action => ({ id: action.key, ...action.payload.val() }))
//       })
//       .map(res => {
//         let groups = [];

//         for (let obj of res) {
//           let chatId = obj['id'];
//           let sub = this.db.object('chats/' + chatId + '/member').valueChanges();
//           groups.push({ id: chatId, sub: sub });
//         }
//         return groups;
//       })
//   }

//   startChatgroup(id) {
//     return this.chatsRef.push({
//       member: [this.afAuth.auth.currentUser.uid, id]
//     }).then(res => {
//       return this.db.list('groups/' + this.afAuth.auth.currentUser.uid).set(res.key, true)
//         .then(() => {
//           return this.db.list('groups/' + id).set(res.key, true)
//         })
//     })
//   }

//   getChatMessages(chatId) {
//     return this.db.list('chats/' + chatId + '/messages').valueChanges();
//   }

//   addChatMessage(msg, chatId) {
//     return this.db.list('chats/' + chatId + '/messages').push({
//       msg: msg,
//       from: this.afAuth.auth.currentUser.uid,
//       createdAt: firebase.database.ServerValue.TIMESTAMP
//     });
//   }

}