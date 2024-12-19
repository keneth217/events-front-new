import { Routes } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { AboutComponent } from "./about/about.component";
import { EventDetailsComponentComponent } from "./event-details-component/event-details-component.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AttendeeListComponent } from "./attendee-list/attendee-list.component";
import {HomeComponent} from "./home/home.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {AddeventComponent} from "./addevent/addevent.component";
import {MyticketsComponent} from "./mytickets/mytickets.component";

export const routes: Routes = [
  { path: '', component   : HomeComponent }, // Fixed
  { path: 'about', component: AboutComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'list', component: AttendeeListComponent },
  { path: 'event-details/:eventId', component: EventDetailsComponentComponent },
  { path: 'dash', component: DashboardComponent ,
  children:[
    { path: 'events', component: EventsListComponent },
    { path: 'add', component: AddeventComponent },

    { path: 'my-tickets', component: MyticketsComponent },
    { path: 'category', component: CategoryListComponent },
  ],
  },
];
