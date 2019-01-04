import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { UserProfile } from '../models/user-profile.model';

@Injectable()
export class UserProfileService {

  private userProfileDoc: AngularFirestoreDocument<UserProfile>;
  user: Observable<UserProfile>;

  userChanged = new Subject<UserProfile>();
  private myuser: UserProfile;
  userName: string;
  myEmail: string;
  myStartGroup: string;

  private fbSubs: Subscription[] = [];

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
    ){

    }

    updateUserProfile(item: UserProfile) {
        this.userProfileDoc.update(item);
    }

    getUserProfile() {
        this.fbSubs.push(
          this.afAuth.authState.subscribe(user => {
            if (user) {
              this.myEmail = user.email;
              console.log('userProfile constructor - email set');

              this.userProfileDoc = this.afs.doc<UserProfile>('userProfiles/' + this.myEmail);
              this.user = this.userProfileDoc.valueChanges();

            } else {
              this.myEmail = ' ';
            }
          })
        );
    }

    cancelSubscriptions() {
      this.fbSubs.forEach(sub => sub.unsubscribe());
    }
}
