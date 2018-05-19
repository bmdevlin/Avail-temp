import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage} from '../mainpage/mainpage';
import { RegisterPage} from '../register/register';
import { RestProvider } from '../../providers/rest/rest';
import { MySessionToken } from '../../providers/token';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //authToken: AuthToken;
  savedToken: string;
  authForm: FormGroup;

  constructor(public nav: NavController,  public restProvider: RestProvider,
                    public mySessionToken: MySessionToken, public formBuilder: FormBuilder) {
    this.savedToken = "none";

    this.nav = nav;  // barrydev@mail.com

    this.authForm = formBuilder.group({
        username: ['', Validators.compose([Validators.required,  Validators.minLength(8), Validators.maxLength(30)])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onSubmit(value: any): void {
        if(this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            var myData:string = '{"email": "' + value.username +'", "password": "' + value.password + '"}' ;
           //  var myData = '{"email": "example@mail.com", "password": "123123123"}' ;

            this.restProvider.getAuthToken(myData)
              .subscribe( authToken => {
                     //this.savedToken = authToken.auth_token;
                     this.mySessionToken.setMyAuthToken(authToken.auth_token).then(
                                 res => {this.nav.setRoot(MainPage, {});} );
                            }, error => {
                              console.log('auth failed: ', myData);
                            });

        }
    }
  register(event) {
    this.nav.push(RegisterPage);
  }
  goToMain(event) {
    this.nav.setRoot(MainPage, {});
  }

}
