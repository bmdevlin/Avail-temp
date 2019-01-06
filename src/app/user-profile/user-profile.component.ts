import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserProfileService } from '../services/userProfile.service';
import { UserProfile } from '../models/user-profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfileSubscription: Subscription;
  myUserProfile: UserProfile;

  constructor(private userProfileService: UserProfileService) {
    }

  ngOnInit() {
   this.myUserProfile = this.userProfileService.getUserProfile();
   this.userProfileSubscription = this.userProfileService.userProfileChanged.subscribe((userProfile: UserProfile) => {
                this.myUserProfile = userProfile;
             console.log('UserProfile component subscribe: ' + this.myUserProfile.email);
    }  );
   
  }

  ngOnDestroy() {
    this.userProfileSubscription.unsubscribe();
  }

}
