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
import { ChatsPage } from '../pages/chat/chat';
import { AddChatPage } from '../pages/addchat/addchat';
import { MainPage } from '../pages/mainpage/mainpage';
import { TasksPage } from '../pages/tasks/tasks/tasks';
import { TaskDetailsPage } from '../pages/tasks/task-details/task-details';
import { AddTaskPage } from '../pages/tasks/add-task/add-task';
import { UpdateTaskPage } from '../pages/tasks/update-task/update-task';
import { RestProvider } from '../providers/rest/rest';
import { MySessionToken } from '../providers/token';
import { RestTasksProvider } from '../providers/rest-tasks/rest-tasks';
import { GroupsPage } from '../pages/groups/groups';

import { ChatsProvider } from '../providers/chats/chats';
import { UsersProvider } from '../providers/users/users';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { RestChatsProvider } from '../providers/rest-tasks/rest-chats';
import { RestChatusersProvider } from '../providers/rest-tasks/rest-chatusers';
import { RestPostsProvider } from '../providers/rest-tasks/rest-posts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TasksPage,
    TaskDetailsPage,
    AddTaskPage,
    UpdateTaskPage,
    RegisterPage,
    ChatsPage,
    AddChatPage,
    GroupsPage
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
    ChatsPage,
    AddChatPage,
    GroupsPage,
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
    MySessionToken,
    ChatsProvider,
    UsersProvider,
    //AngularFireDatabase
    RestChatsProvider,
    RestChatusersProvider,
    RestPostsProvider,
    MySessionToken
  ]
})
export class AppModule {}
