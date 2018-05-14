import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

 
@Injectable()
export class RestPostsProvider {

  basePostUrl:string =  "http://localhost:3000/posts"; //"https://shrouded-harbor-31805.herokuapp.com/posts";  "http://localhost:3000/posts";


  constructor(public httpClient: HttpClient) {
    console.log('Hello RestPostsProvider ');
  }
  /** GET posts from the server */
  getPosts (chatId:number, sToken: string): Observable<Post[]> {
     
    let headers = new HttpHeaders().set('Authorization', sToken ); 
    var getUrl = `${this.basePostUrl}?chatid=${chatId}`;
    return this.httpClient.get<Post[]>(getUrl, {headers: headers})

  }

  // Sending a GET request to /posts/:id
  getPostById(sToken: string, postId: number): Observable<Post> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    var postUrl = `${this.basePostUrl}/${postId}`;
    return this.httpClient.get<Post>(postUrl, {headers: headers})

  }

  createPost(sToken: string, post: Post): Observable<Post> {
    let headers = new HttpHeaders().set('Authorization', sToken );
    return this.httpClient.post<Post>(this.basePostUrl, post, {headers: headers})
  }

  // Sending a PUT request to /posts/:id
  updatePost(sToken: string, post: Post){
    let headers = new HttpHeaders().set('Authorization', sToken );
    var postUrl = `${this.basePostUrl}/${post.id}`;

    return this.httpClient.put<Post>(postUrl, post, {headers: headers})
  }

  /** DELETE: delete the post from the server */
  deletePost (sToken: string, id: number): Observable<{}> {
    let headers = new HttpHeaders().set('Authorization',sToken );
    var delurl = `${this.basePostUrl}/${id}`;
    return this.httpClient.delete(delurl, {headers: headers})
  }


 

}

export class Post {
  id: number;
  customer: number;
  chatid: number;
  userid: number;
  contentid: number;
  message: string;
  created_at: string;
  updated_at: string;
}

