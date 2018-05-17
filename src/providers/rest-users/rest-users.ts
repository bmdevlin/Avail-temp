import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { DateTime } from 'ionic-angular';

export class UserCredentials {
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  customer: Number;
}

@Injectable()
export class RestUsersProvider {

  baseUsersUrl:string =  "http://shrouded-harbor-31805.herokuapp.com/users"; //"https://shrouded-harbor-31805.herokuapp.com/users";  "http://localhost:3000/users";
  baseRegUrl:string =  "http://localhost:3000/register"; //"https://shrouded-harbor-31805.herokuapp.com/register";  "http://localhost:3000/register";

  constructor(public httpClient: HttpClient) {
    console.log('Hello RestUsersProvider Provider');
  }

  getAllUsers (sToken: string): Observable<any[]> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var getUrl = `${this.baseUsersUrl}`;
    return this.httpClient.get<any[]>(getUrl, {headers: headers})
  }

  createUser (sToken: string, userCreds: UserCredentials): Observable<any> {
    //let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<any>(this.baseRegUrl, userCreds)
  }

//   usersRef = this.db.list('users');
//   authState = this.afAuth.authState;

//   signUp(credentials: UserCredentials) {
//     return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
//       .then(() => {
//         return this.usersRef.set(this.afAuth.auth.currentUser.uid, {
//           nickname: credentials.nickname
//         });
//       })
//   }

//   signIn(credentials: UserCredentials) {
//     return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
//   }

//   signOut() {
//     this.afAuth.auth.signOut();
//   }

//   resetPw(email) {
//     return this.afAuth.auth.sendPasswordResetEmail(email);
//   }

//   getCurrentUserId() {
//     return this.afAuth.auth.currentUser.uid;
//   }

//   getAllUsers() {
//     return this.usersRef.snapshotChanges()
//       .map(actions => {
//         return actions.map(action => ({ id: action.key, ...action.payload.val() }))
//       })
//       .map(users => {
//         return users.filter(user => user.id !== this.afAuth.auth.currentUser.uid);
//       })
//   }

//   getCurrentUserNickname() {
//     return this.getUserNickname(this.afAuth.auth.currentUser.uid);
//   }

//   getUserNickname(id) {
//     return this.db.object('users/' + id + '/nickname').valueChanges();
//   }

//   updateNickname(newName) {
//     return this.db.object('users/' + this.afAuth.auth.currentUser.uid)
//       .update({ nickname: newName });
//   }

}