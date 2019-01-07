import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../auth/user.model';
import { GroupMember } from '../models/groupMember.model';
import { UserService } from '../services/user.service';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: GroupMember[];
  usersSubscription: Subscription;
  //  not required:  activeGroupName: string;


  constructor(
    private groupService: GroupService) {}

  ngOnInit() {  
    this.usersSubscription =  this.groupService.activeGroupMembersChanged.subscribe(
      users => {(this.users = users);
      console.log("User-list: current group members: " +  this.users);}
    );
    // this.activeGroupName = this.groupService.getActiveGroup().groupName;
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
