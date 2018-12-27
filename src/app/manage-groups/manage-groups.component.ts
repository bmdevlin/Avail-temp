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

  ngOnChanges() {
    //this.myOwnedGroups = this.groupService.getMyOwnedGroups();
 
  }

  ngOnDestroy() {
    this.myOwnedGroupsSubscription.unsubscribe();
  }
}