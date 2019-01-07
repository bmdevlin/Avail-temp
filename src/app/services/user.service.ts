import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { User } from '../auth/user.model';

@Injectable()
export class UserService {

  // currently not using this table. We have userProfile instead, and groups have group members.

  usersChanged = new Subject<User[]>();

  usersCol:  AngularFirestoreCollection<User>;
  users: User[];

  private fbSubs: Subscription[] = [];

  constructor(
    //private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
    ){ }

  fetchUsers(groupName: string) {

      console.log('******* Warning:  FetchUsers not implemented')
      /*
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
          this.users = [];
          users.forEach(user => {
            user.groups.forEach (group => {
              if (group == groupName) {
                this.users.push(user);
              }
            })
          
          })  
         this.usersChanged.next([...this.users]);
          
        })
    );
    */
  }


  getUsers() {
    return this.users;
  }


  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

 
}