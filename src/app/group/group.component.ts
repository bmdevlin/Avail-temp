import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../services/group.service';
import { AuthService } from '../auth/auth.service';
import { Group } from '../models/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() group: Group;
  groupOwner: string;
  groupName: string;
 

  constructor(private groupService: GroupService) {
     
  }

  ngOnInit(group = this.group) {

    this.groupOwner = group.groupOwner;
    this.groupName = group.groupName;
  }
}
