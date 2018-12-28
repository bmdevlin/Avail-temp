import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
//import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable()
export class UserProfileService {

  userChanged = new Subject<User>();
  private myuser:   User;
  userName: string;
  myEmail: string;
  myStartGroup: string;

  usersCol:  AngularFirestoreCollection<User>;
  user: User;

  private fbSubs: Subscription[] = [];

  constructor(
    //private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
    ){
      this.userName = "BarryHC";
    }


  getUserProfile() {
    return this.user;
  }
 
}