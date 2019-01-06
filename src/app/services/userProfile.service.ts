import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';
import { UserProfile } from '../models/user-profile.model';
//import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserProfileService {

  private userProfileDoc: AngularFirestoreDocument<UserProfile>;
  userProfileObs: Observable<UserProfile>;
  private userProfileSub: Subscription;
  userProfileChanged = new Subject<UserProfile>();
  myUserProfile: UserProfile;
  userName: string;
  myEmail: string;
  myStartGroup: string;

  private fbSubs: Subscription[] = [];

  constructor(
    private afs: AngularFirestore //,
    ){
      this.resetUserProfile();
    }

    updateUserProfile(item: UserProfile) {
        this.userProfileDoc.update(item);
    }

    getUserProfile(){
      return this.myUserProfile;
    }

    getUserName(){
      return this.myUserProfile.displayName;
    }

    getEmailId(){
      return this.myUserProfile.email;
    }

    fetchUserProfile(email: string) {
      this.myEmail = email;
      console.log('userProfile fetchUserProfile - email:' + this.myEmail);

      this.userProfileDoc = this.afs.doc<UserProfile>('userProfiles/' + this.myEmail);
      this.userProfileObs = this.userProfileDoc.valueChanges();
      this.userProfileSub = this.userProfileObs.subscribe((profile: UserProfile) => {
        this.myUserProfile = profile;
        this.userProfileChanged.next(this.myUserProfile);

        console.log('userProfile fetchUserProfile name:' + profile.displayName);

      });

    }

    resetUserProfile(){
      this.myUserProfile = {
        defaultGroup:'none', 
        email:'none', 
        displayName: 'none'
      };

    }

    cancelSubscriptions() {
      this.userProfileSub.unsubscribe();
    }
}
