import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, private alertCtrl: AlertController, private onesignal: OneSignal, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (platform.is('cordova')){
         this.setupPush();
        }
    });
  }

  setupPush(){
    this.onesignal.startInit( '7d3751ec-95c7-4e71-a928-b3a7213775b7',
                                                        '844760076384');
    
    this.onesignal.handleNotificationOpened().subscribe(data => {
      console.log('We opened a push', data);
      let message = data.notification.payload.body;
      let title = data.notification.payload.title;
      let alert = this.alertCtrl.create({
        title: title,
        subTitle: message, 
        buttons: [
          {
            text: 'Close',
            role: 'cancel'
          }
        ]
      })
      alert.present();
    });
 
    this.onesignal.handleNotificationReceived().subscribe(data => {
      console.log('We received a push', data)
    });

    this.onesignal.endInit();
  }
}

 
// restAPIkey:  'NDY5ZDJhZmQtZGFlOC00MzFlLWFmYjktYTQ3MzZjN2RmMjYw'