import { Injectable } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
//import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

import { UserService } from '../services/user.service';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';
import { ChatMessage } from '../models/chat-message.model';


@Injectable()
export class ChatService {
  messagesCol:  AngularFirestoreCollection<ChatMessage>;
  chatMessages: ChatMessage[];
  chatMessagesChanged= new Subject<ChatMessage[]>();
  chatMessage: ChatMessage;

  private group: Group;
  private groupSubscription: Subscription;

  private fbSubs: Subscription[] = [];

  constructor(
    //private db: AngularFireDatabase,
    private afs: AngularFirestore,
    private userService: UserService,
    private groupService: GroupService
    ) {      
     this.messagesCol = this.afs.collection('groups').doc('dummy')
      .collection('groupChat');
      this.messagesCol
        .snapshotChanges()
        .pipe(map(docArray => {
          return docArray.map(doc => {
              return {
                id: doc.payload.doc.id,
                ...doc.payload.doc.data()
              }
          })
          }))
        .subscribe((messages: ChatMessage[]) => {
          this.chatMessages = messages;
          this.chatMessagesChanged.next([...this.chatMessages]);
          console.log('Chat Service constructor: ' + this.chatMessages);
      });   
    }

    //db.collection('rooms').doc('roomA').collection('messages').doc('message1');
 
  sendMessage(msg: string, url: string, filename: string) {
    const timestamp = this.getTimeStamp();
    const group = this.groupService.getActiveGroup();
    var userName;
    var email;

    // if valid, use my name and email id from the groupMember collection. Otherwise, use the default values
    if (this.groupService.myActiveMemberInfo){
      userName = this.groupService.myActiveMemberInfo.memberName;
      email =  this.groupService.myActiveMemberInfo.memberId;
    }
    else{
      userName = this.userService.userName;
      email =  this.userService.myEmail;
    }
   
    this.afs.collection('groups').doc(group.id).collection('groupChat').add(
      { 'message': msg, 
      'url': url, 
      'filename': filename,
      'timeSent': timestamp, 
      'userName': userName, 
      'email': email});
  }

  getMessages()  {
    this.groupSubscription = this.groupService.activeGroupChanged.subscribe(group => {
      this.group = group;
      //console.log('Chat Service - current group' + this.group.id)
      this.afs.collection('groups').doc(this.group.id)
               .collection('groupChat', ref => ref.orderBy('timeSent', "desc")) 
               .snapshotChanges()
               .pipe(map(docArray => {
                return docArray.map(doc => {
                    return {
                      id: doc.payload.doc.id,
                      ...doc.payload.doc.data()
                    }
                })
                }))
               .subscribe((messages: ChatMessage[]) => {
                this.chatMessages = messages;
                this.chatMessagesChanged.next([...this.chatMessages]);
                console.log('Chat Service getmessages: ' + this.chatMessages);
                this.groupService.setMyGroupInfo();
            });   
    });
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  getTimeStamp() {
    const now = new Date();
    var dayInMonth = now.getUTCDate();
    var dayString: string;

    if (dayInMonth < 10){
      dayString = '0' + dayInMonth;
    } 
    else{
      dayString = dayInMonth.toString();
    };

    const date = now.getUTCFullYear() + '/' +
                 (now.getUTCMonth() + 1) + '/' +
                 dayString;
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
