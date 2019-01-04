import { Component, OnInit, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserProfileService } from '../services/userProfile.service';
import { UserProfile } from '../models/user-profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnChanges {
  userProfileSubscription: Subscription;
  myUserProfile: UserProfile;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.userProfileSubscription= this.userProfileService.user.subscribe((userProfile: UserProfile) => {
      this.myUserProfile = userProfile;
      console.log('UserProfile component: ' + this.myUserProfile)
    }  );
    this.userProfileService.getUserProfile();
  }

  ngOnChanges() {

  }

}
