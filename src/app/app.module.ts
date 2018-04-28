import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MainPage } from '../pages/mainpage/mainpage';
import { TasksPage } from '../pages/tasks/tasks/tasks';
import { TaskDetailsPage } from '../pages/tasks/task-details/task-details';
import { AddTaskPage } from '../pages/tasks/add-task/add-task';
import { UpdateTaskPage } from '../pages/tasks/update-task/update-task';
import { RestProvider } from '../providers/rest/rest';
import { MySessionToken } from '../providers/token';
import { RestTasksProvider } from '../providers/rest-tasks/rest-tasks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TasksPage,
    TaskDetailsPage,
    AddTaskPage,
    UpdateTaskPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    TasksPage,
    TaskDetailsPage,
    AddTaskPage,
    UpdateTaskPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RestTasksProvider,
    MySessionToken
  ]
})
export class AppModule {}
