import { UsersProvider } from './../users/users';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatsProvider {
  chatsRef = this.db.list('chats');

  constructor(public http: HttpClient, private afAuth: AngularFireAuth, private db: AngularFireDatabase, private usersProvider: UsersProvider) {

  }

  getUserChatgroups() {
    return this.db.list('groups/' + this.afAuth.auth.currentUser.uid).snapshotChanges()
      .map(actions => {
        return actions.map(action => ({ id: action.key, ...action.payload.val() }))
      })
      .map(res => {
        let groups = [];

        for (let obj of res) {
          let chatId = obj['id'];
          let sub = this.db.object('chats/' + chatId + '/member').valueChanges();
          groups.push({ id: chatId, sub: sub });
        }
        return groups;
      })
  }

  startChatgroup(id) {
    return this.chatsRef.push({
      member: [this.afAuth.auth.currentUser.uid, id]
    }).then(res => {
      return this.db.list('groups/' + this.afAuth.auth.currentUser.uid).set(res.key, true)
        .then(() => {
          return this.db.list('groups/' + id).set(res.key, true)
        })
    })
  }

  getChatMessages(chatId) {
    return this.db.list('chats/' + chatId + '/messages').valueChanges();
  }

  addChatMessage(msg, chatId) {
    return this.db.list('chats/' + chatId + '/messages').push({
      msg: msg,
      from: this.afAuth.auth.currentUser.uid,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    });
  }

}