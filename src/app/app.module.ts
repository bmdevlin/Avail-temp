import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';

import { OneSignal } from '@ionic-native/onesignal';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';
import { AddChatPage } from '../pages/add-chat/add-chat';
import { MainPage } from '../pages/mainpage/mainpage';
import { TasksPage } from '../pages/tasks/tasks/tasks';
import { TaskDetailsPage } from '../pages/tasks/task-details/task-details';
import { AddTaskPage } from '../pages/tasks/add-task/add-task';
import { UpdateTaskPage } from '../pages/tasks/update-task/update-task';
import { UserProfilesPage } from '../pages/userprofiles/user-profiles/user-profiles';
import { UserProfileDetailsPage } from '../pages/userprofiles/user-profile-details/user-profile-details';
import { AddUserProfilePage } from '../pages/userprofiles/add-user-profile/add-user-profile';
import { UpdateUserProfilePage } from '../pages/userprofiles/update-user-profile/update-user-profile';
import { TimelinesPage } from '../pages/timelines/timelines';
import { CalentriesPage } from '../pages/calentries/calentries/calentries';
import { CalentryDetailsPage } from '../pages/calentries/calentry-details/calentry-details';
import { AddCalentryPage } from '../pages/calentries/add-calentry/add-calentry';
import { UpdateCalentryPage } from '../pages/calentries/update-calentry/update-calentry';

import { RestProvider } from '../providers/rest/rest';
import { MySessionToken } from '../providers/token';
import { RestTasksProvider } from '../providers/rest-tasks/rest-tasks';
import { GroupsPage } from '../pages/groups/groups';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { RestChatsProvider } from '../providers/rest-chats/rest-chats';
import { RestGroupsProvider } from '../providers/rest-groups/rest-groups';
import { RestUsersProvider } from '../providers/rest-users/rest-users';
import { RestTimelinesProvider } from '../providers/rest-timelines/rest-timelines';
import { RestUserProfilesProvider } from '../providers/rest-userprofiles/rest-userprofiles';
import { RestCalentriesProvider } from '../providers/rest-calentries/rest-calentries';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TasksPage,
    TaskDetailsPage,
    AddTaskPage,
    UpdateTaskPage,
    CalentriesPage,
    CalentryDetailsPage,
    AddCalentryPage,
    UpdateCalentryPage,
    UserProfilesPage,
    UserProfileDetailsPage,
    AddUserProfilePage,
    UpdateUserProfilePage,
    TimelinesPage,
    RegisterPage,
    ChatPage,
    AddChatPage,
    GroupsPage,
    UserProfilesPage,
    UserProfileDetailsPage,
    AddUserProfilePage,
    UpdateUserProfilePage
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
    ChatPage,
    AddChatPage,
    GroupsPage,
    MainPage,
    TasksPage,
    TaskDetailsPage,
    AddTaskPage,
    UpdateTaskPage,
    CalentriesPage,
    CalentryDetailsPage,
    AddCalentryPage,
    UpdateCalentryPage,
    UserProfilesPage,
    UserProfileDetailsPage,
    AddUserProfilePage,
    UpdateUserProfilePage,
    TimelinesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    RestTasksProvider,
    OneSignal,
    RestChatsProvider,
    RestGroupsProvider,
    RestUsersProvider,
    RestUserProfilesProvider,
    RestTimelinesProvider,
    RestCalentriesProvider,
    MySessionToken
  ]
})
export class AppModule {}
