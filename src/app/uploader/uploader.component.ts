import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage'; 
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  private ref: AngularFireStorageReference;
  private task: AngularFireUploadTask;
  downloadURL: string;
  filename: string;
  imageForm: FormGroup;
  uploadProgress: number;

  constructor(private afStorage: AngularFireStorage) {
    this.filename = 'barry.jpg';
   }
  upload(event) {
    this.filename = Math.random().toString(36).substring(2);
    console.log("Upload file: " +  this.filename);
    this.ref = this.afStorage.ref("images/" + this.filename);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);
  } 
 
 

  download(){  
     
    console.log("Download URL starts "  );
    this.afStorage.ref( '/images/' + this.filename).getDownloadURL().subscribe(url => {this.downloadURL = url;
      console.log("Download URL: " + this.downloadURL);
    });     // + this.filename
    
    // <img [src]="downloadURL | async"/> 
  }

   ngOnInit() {
    this.imageForm = new FormGroup({
      image: new FormControl() 
    });
  }

}
