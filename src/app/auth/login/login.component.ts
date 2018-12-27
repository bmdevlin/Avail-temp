import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validLogin: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.validLogin = true;
    
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() { 
    if (this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })) {
      this.validLogin = true;
    }
   else{
      this.validLogin = false;
   }
  }

}
