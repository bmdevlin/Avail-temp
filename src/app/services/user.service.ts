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
export class UserService {

  usersChanged = new Subject<User[]>();
  private myuser:   User;
  userName: string;
  myEmail: string;

  usersCol:  AngularFirestoreCollection<User>;
  users: User[];

  private fbSubs: Subscription[] = [];

  constructor(
    //private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
    ){
      this.userName = "BarryHC";
      this.fetchMyEmail();
    }

  fetchUsers() {
      
      this.usersCol = this.afs.collection('users');
      this.fbSubs.push(
        this.usersCol.snapshotChanges().pipe(
          map(actions=> actions.map(a => {
            const data = a.payload.doc.data() as User;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        )
        .subscribe((users: User[]) => {
          this.users = users;   
          this.usersChanged.next([...this.users]);
          this.setUserDisplayName (this.myEmail);
        })
    );
  }

  fetchMyEmail(){
    this.fbSubs.push(
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.myEmail = user.email;
        } else {
          this.myEmail = '';
        }
      })
    );
  }

  getUsers() {
    return this.users;
  }

  setUserDisplayName (myEmail: string) {
    this.myuser  = this.users.find(
      ex => ex.email === myEmail
    );
    //console.log("User service: current auth user: " + myEmail); 
    
    if (this.myuser)
       {this.userName = this.myuser.displayName;}
    console.log("User service: current user: " + this.userName); 
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

 
}