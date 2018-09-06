import { Component, OnInit, Input } from '@angular/core';
import { AuthProvider, Credentials, AuthToken } from '../../providers/authProvider';
import {throwError} from 'rxjs';  // Updated for Angular 6/RxJS 6
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MySessionToken} from '../../providers/token';
import { LoginFormComponent } from '../../pages/login/login-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @Input() id: number;

  myCreds = new Credentials();
  loginForm: FormGroup;

  private sessToken:string;

  constructor( 
    private modalService: NgbModal,
    private mySessionToken: MySessionToken, 
    private authProvider: AuthProvider,
    ) {
      this.sessToken = 'x';
    }
    
    ngOnInit() {
    }
  

    openFormModal() {
      const modalRef = this.modalService.open(LoginFormComponent);
      modalRef.componentInstance.id = 12; // should be the id
  
      modalRef.result.then((result) => {
        console.log(result);
        this.onLogin(result);
      }).catch((error) => {
        console.log(error);
      });
    }
 
 

  authLogin(body) {
    this.authProvider.getAuthToken(body).subscribe(
      (data: AuthToken) => {
        this.sessToken= data.auth_token;
        this.mySessionToken.setMyAuthToken(data.auth_token);
      },
      error =>  {
        console.error("Error on auth!");
        return throwError(error);  // Angular 6/RxJS 6
      }

    );

  }

  onLogin(loginForm){
 
    this.myCreds.email =  loginForm.emailid;
    this.myCreds.password =  loginForm.password;
    this.authLogin(this.myCreds) ;

    }

 
}
