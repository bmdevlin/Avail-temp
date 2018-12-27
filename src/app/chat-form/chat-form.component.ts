import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage'; 
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  chatForm: FormGroup;
  private ref: AngularFireStorageReference;
  private task: AngularFireUploadTask;
  downloadURL: string;
  filename: string;
  uploadProgress:  Number ;

  constructor(private chatService: ChatService, private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.chatForm = new FormGroup({
      message: new FormControl(''),
      url: new FormControl('')
    });
  }

  upload(event) {
    this.filename = Math.random().toString(36).substring(2);
    console.log("Upload file: " +  this.filename);
    this.ref = this.afStorage.ref("images/" + this.filename);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);
    this.task.percentageChanges() 
     .subscribe((n: number) => {
      this.uploadProgress = n;
      console.log("Upload complete: " + this.filename);
    })
  } 

  onSubmit() {
    if (this.filename){ 
      this.afStorage.ref( '/images/' + this.filename).getDownloadURL()
      .subscribe(url =>
        {this.downloadURL = url;
          console.log("Download URL: " + this.downloadURL);
          this.chatService.sendMessage(
            this.chatForm.value.message, 
            this.chatForm.value.url,
            this.downloadURL
            );
            this.chatForm.value.message = '';
            this.chatForm.value.url = '';
      }); 
    }
    else{ 
    this.chatService.sendMessage(
      this.chatForm.value.message, 
      this.chatForm.value.url,
      ''
      );
      this.chatForm.value.message = '';
      this.chatForm.value.url = '';
    }
  }
 
 
 
}
