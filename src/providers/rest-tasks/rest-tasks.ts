import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestTasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestTasksProvider {

  baseTaskUrl:string =  "http://localhost:3000/tasks"; //"https://shrouded-harbor-31805.herokuapp.com/tasks";  "http://localhost:3000/tasks";


  constructor(public httpClient: HttpClient) {
    console.log('Hello RestTasksProvider Provider');
  }
  /** GET tasks from the server */
  getTasks (sToken: string): Observable<Task[]> {
     
    let headers = new HttpHeaders().set('Authorization', sToken ); 

    return this.httpClient.get<Task[]>(this.baseTaskUrl, {headers: headers})

  }

  // Sending a GET request to /tasks/:id
  getTaskById(sToken: string, taskId: number): Observable<Task> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var taskUrl = `${this.baseTaskUrl}/${taskId}`;
    return this.httpClient.get<Task>(taskUrl, {headers: headers})

  }

  createTask(sToken: string, task: Task): Observable<Task> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<Task>(this.baseTaskUrl, task, {headers: headers})
  }

  // Sending a PUT request to /tasks/:id
  updateTask(sToken: string, task: Task){
    let headers = new HttpHeaders().set('Authorization', sToken );
    var taskUrl = `${this.baseTaskUrl}/${task.id}`;

    return this.httpClient.put<Task>(taskUrl, task, {headers: headers})
  }

  /** DELETE: delete the task from the server */
  deleteTask (sToken: string, id: number): Observable<{}> {
    let headers = new HttpHeaders().set('Authorization',sToken );
    var delurl = `${this.baseTaskUrl}/${id}`;
    return this.httpClient.delete(delurl, {headers: headers})
  }


 

}

export class Task {
  id: number;
  title: string;
  description: string;
  customer: number;
  category: string;
  completed: boolean;
  person: string;
  tag: string;
  created_at: string;
  updated_at: string;
}

