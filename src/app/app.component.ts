import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, private onesignal: OneSignal, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.setupPush();
    });
  }

  setupPush(){
    this.onesignal.startInit( '7d3751ec-95c7-4e71-a928-b3a7213775b7');

    this.onesignal.endInit();
  }
}

 
// restAPIkey:  'NDY5ZDJhZmQtZGFlOC00MzFlLWFmYjktYTQ3MzZjN2RmMjYw'