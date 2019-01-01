import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  myEmail: string = '';

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private chatService: ChatService,
    private userService: UserService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        //console.log(user);
        this.myEmail = user.email;
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/chat']);
      } else {
        this.chatService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/welcome']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.myEmail = authData.email;
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(authData: AuthData): boolean {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.myEmail = authData.email;
        //console.log(result);
        return true;
      })
      .catch(error => {
        console.log(error);
        return false;
      });
    return false;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.myEmail = ' ';
    this.router.navigate(['/welcome']);
    this.userService.cancelSubscriptions();
    this.chatService.cancelSubscriptions();
  }

  isAuth() {
    return this.isAuthenticated;
  }


}
