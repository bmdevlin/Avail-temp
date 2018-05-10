// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

//export class UserCredentials {
//   nickname = '';
//   email = '';
//   password = '';
//}

// @Injectable()
export class UsersProvider {
//   usersRef = this.db.list('users');
//   authState = this.afAuth.authState;

//   constructor(public http: HttpClient, private afAuth: AngularFireAuth, private db: AngularFireDatabase) {

//   }

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