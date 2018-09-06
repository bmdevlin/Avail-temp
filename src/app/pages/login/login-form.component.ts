import { Component, Input } from '@angular/core';
import { AuthProvider, Credentials, AuthToken } from '../../providers/authProvider';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent   {

  @Input() id: number;

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  loginForm: FormGroup;

  private sessToken:string;

    constructor(public activeModal: NgbActiveModal, 
      private formBuilder: FormBuilder,
      private authProvider: AuthProvider) {
        this.createForm();
        this.sessToken = 'x';
    }

    private createForm() {
      this.loginForm = this.formBuilder.group({
        emailid: '',
        password: '' 
      });
    }  

    private submitForm() {
      this.activeModal.close(this.loginForm.value);
    }

  /* ngOnInit() {
    this.loginForm = this.fb.group({
      emailid: ['', [Validators.required, Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
  });
  }
  */

 
}
