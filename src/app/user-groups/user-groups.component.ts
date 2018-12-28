import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit, OnDestroy {
  myGroups: Group[];
  myGroupsSubscription: Subscription;
  activeGroupName: string;

  constructor(private userService: UserService,
    private groupService: GroupService) { }

  ngOnInit() {
    this.myGroupsSubscription = this.groupService.myGroupsChanged.subscribe(
      groups => (this.myGroups = groups)
    );
    this.groupService.getMyGroups();
  }

  onSelectGroup(form: NgForm) {
    //console.log('User Group  - select  group: ' + form.value.group)
    this.groupService.setActiveGroup(form.value.group);
    this.activeGroupName = this.groupService.getActiveGroup().groupName;
    this.userService.fetchUsers(this.activeGroupName);
  }

  ngOnDestroy() {
    this.myGroupsSubscription.unsubscribe();
  }
}