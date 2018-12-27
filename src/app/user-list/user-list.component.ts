import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../auth/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  usersSubscription: Subscription;


  constructor(private userService: UserService) {}

  ngOnInit() {  
    this.usersSubscription =  this.userService.usersChanged.subscribe(
      users => {(this.users = users);
      console.log("User-list: current users list: " +  this.users);}
    );
    this.userService.fetchUsers();
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }
}
