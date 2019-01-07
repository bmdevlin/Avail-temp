import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.css']
})
export class ManageGroupsComponent implements OnInit, OnChanges, OnDestroy {
  myOwnedGroups: Group[];
  myOwnedGroupsSubscription: Subscription;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.myOwnedGroupsSubscription = this.groupService.myOwnedGroupsChanged.subscribe(
      groups => (this.myOwnedGroups = groups)
    );
    this.groupService.getMyOwnedGroups();
  }

  // **TO DO**  add capability to create a new group, 
  //  add subscribers to my groups, remove subscribers

  ngOnChanges() {
    //this.myOwnedGroups = this.groupService.getMyOwnedGroups();
 
  }

  ngOnDestroy() {
    this.myOwnedGroupsSubscription.unsubscribe();
  }
}