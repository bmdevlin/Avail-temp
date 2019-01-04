import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';
import { FullCalendarModule } from 'ng-fullcalendar';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalendarComponent, ShowEventDialog } from './calendar/calendar.component';
import { EventFormComponent } from './event-form/event-form.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { GroupComponent } from './group/group.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component'
import { UploaderComponent } from './uploader/uploader.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { ChatService } from './services/chat.service';
import { GroupService } from './services/group.service';
import { UserService } from './services/user.service';
import { UserProfileService } from './services/userProfile.service';
import { EventService } from './services/event.service';

import { AddEventDialogComponent } from './event-dialog/add-event-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCalendarComponent,
    EventFormComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    GroupComponent,
    UserListComponent,
    UserItemComponent,
    UserGroupsComponent,
    UserProfileComponent,
    ManageGroupsComponent,
    UploaderComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    AddEventDialogComponent,
    ShowEventDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule// imports firebase/storage only needed for storage features
  ],
  providers: [AuthService, ChatService, GroupService,
                  UserService, UserProfileService, EventService],
  bootstrap: [AppComponent],
  entryComponents: [AddEventDialogComponent, ShowEventDialog]
})
export class AppModule { }
