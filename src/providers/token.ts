import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class MySessionToken {
  private mySessionToken: string;

  constructor(public storage: Storage) {
    this.mySessionToken = "None";
  }

  setMyAuthToken(value: string) {
     this.mySessionToken = value;
     return this.storage.set('token', value);
  }

  getMyAuthToken(): Promise<string> {
    return this.storage.get('token');
  }

   
  getBaseURL(value: string): string {
    //return "http://localhost:3000/" + value; 
    return  "https://shrouded-harbor-31805.herokuapp.com/" + value;  
 } 
}
 