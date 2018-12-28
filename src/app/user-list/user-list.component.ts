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
  activeGroupName: string;


  constructor(private userService: UserService,
    private groupService: GroupService) {}

  ngOnInit() {  
    this.usersSubscription =  this.groupService.activeGroupMembersChanged.subscribe(
      users => {(this.users = users);
      console.log("User-list: current users list: " +  this.users);}
    );
    this.activeGroupName = this.groupService.getActiveGroup().groupName;

    //this.usersSubscription =  this.userService.usersChanged.subscribe(
    //  users => {(this.users = users);
    //  console.log("User-list: current users list: " +  this.users);}
    //);
    //this.activeGroupName = this.groupService.getActiveGroup().groupName;
    //this.userService.fetchUsers(this.activeGroupName);
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
