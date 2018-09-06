import {Injectable} from '@angular/core';

@Injectable()
export class MySessionToken {
  private mySessionToken: string;

  constructor  () { //}(public storage: Storage) {
    this.mySessionToken = 'None';
  }

  setMyAuthToken(value: string) {
     this.mySessionToken = value;
     //return this.storage.set('token', value);
  }

  getMyAuthToken(): string {
    return this.mySessionToken;
    //return this.storage.get('token');
  }

  getBaseURL(value: string): string {
    //return 'http://localhost:3000/' + value;
    return  'https://shrouded-harbor-31805.herokuapp.com/' + value;
 }
}
