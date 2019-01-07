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
  activeGroup: Group;
  activeGroupName: string;

  constructor( 
    private groupService: GroupService) { }

  ngOnInit() {
    console.log('UserGroupsComponent init: ' );
    this.myGroupsSubscription = this.groupService.myGroupsChanged.subscribe(
      groups => (this.myGroups = groups)
    );

    // **TO DO**  subscribe to the active group, to trigger the following actions
    this.activeGroup = this.groupService.getActiveGroup();
    this.activeGroupName = this.activeGroup.groupName;
    console.log('UserGroupsComponent init: ' + this.activeGroupName );
    this.groupService.getMyGroupsAndSetActive(this.activeGroup.id); 
  }

  onSelectGroup(form: NgForm) {
    //console.log('User Group  - select  group: ' + form.value.group)
    this.groupService.setActiveGroup(form.value.group);
    this.activeGroupName = this.groupService.getActiveGroupName();
  }

  ngOnDestroy() {
    this.myGroupsSubscription.unsubscribe();
  }
}