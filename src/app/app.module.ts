import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from  './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { map } from 'rxjs/operators';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './pages/login/login-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { CalendarComponent } from './pages/calendar/calendar.component'
import { AddcalentryComponent } from './pages/addcalentry/addcalentry.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { TimelineFormModalComponent } from './pages/timeline-form-modal/timeline-form-modal.component';
import { LandingComponent } from './pages/landing/landing.component';

import { AuthProvider } from './providers/authProvider';
import { MySessionToken } from './providers/token';
import { CalentryProvider } from './providers/calentryProvider';
import { TimelineProvider } from'./providers/timelineProvider';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    CalendarComponent,
    AddcalentryComponent,
    TimelineComponent,
    TimelineFormModalComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [MySessionToken,
              AuthProvider,
              CalentryProvider,
              TimelineProvider
            ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddcalentryComponent,
    TimelineFormModalComponent,
    LoginFormComponent
  ]
})
export class AppModule { }
