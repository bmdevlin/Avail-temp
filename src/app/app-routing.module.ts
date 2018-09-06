import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AddcalentryComponent } from './pages/addcalentry/addcalentry.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path:  '', redirectTo:  'accounts', pathMatch:  'full' },
  {
    path:  'land',
    component:  LandingComponent
  },
  {
      path:  'register',
      component:  RegisterComponent
  },
  {
    path:  'timeline',
    component:  TimelineComponent
  },
  {
    path:  'calendar',
    component:  CalendarComponent
  },
  {
    path:  'addcalentry',
    component:  AddcalentryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
